import React, { useEffect } from 'react'
import axios from 'axios'

const ChatPage = () => {
  const fetchChat = async()=>{
    const data = await axios.get('/api/chat')
  }
  useEffect(()=>{
    fetchChat()
  },[])
  return (
    <div>
      <h1>chat page is here </h1>
    </div>
  )
}
 
export default ChatPage
