import React from 'react'
import { useChatStore} from "../store/useChatStore"
const HomePage = () => {

  const { selectedUser } = useChatStore();

  return (
    <div>
      HomePage
    </div>
  )
}

export default HomePage
