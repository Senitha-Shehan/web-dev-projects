import { generateToken } from "../lib/utills.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {
    try {
      // Extract fields from the request body
      const { fullName, email, password } = req.body;
  
      // Validate input
      if (!fullName || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      if (password.length < 6) {
        return res
          .status(400)
          .json({ error: "Password must be at least 6 characters long" });
      }
  
      // Check if the email already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user
      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
      });
  
      // Save the user and generate a token
      await newUser.save();
      generateToken(newUser._id, res);
  
      // Respond with success and user details
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic || null, // Provide a default value if profilePic is not set
      });
    } catch (error) {
      console.error("Error in signup controller:", error.message);
  
      // Respond with an error message
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

export const login = (req, res) => {
  res.send("Login Route");
};

export const logout = (req, res) => {
  res.send("Logout Route");
};
