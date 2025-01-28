import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false, // Fixed typo: "isLoginIng" to "isLoggingIn"
  isUpdatingProfile: false,
  isCheckingAuth: true,
  

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      get().connectSocket(); // Use get() to access other store actions
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);

      if (res && res.data) {
        set({ authUser: res.data });
        toast.success("Logged in successfully");
        get().connectSocket(); // Use get() to access other store actions
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error in login:", error); // Log full error for debugging
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Login failed. Please try again."
      );
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const token = get().authUser?.token || localStorage.getItem("authToken"); // Use get() to access state

      if (!token) {
        throw new Error("No authentication token found.");
      }

      const res = await axiosInstance.put("/auth/update-profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("Error details in update profile:", error); // Log the full error object
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Profile update failed"
      );
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  connectSocket: () => {
    // Implement your socket connection logic here
    console.log("Socket connected");
  },
}));
