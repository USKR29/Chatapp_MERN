import React from 'react'
import useFetchChat from '../hooks/useFetchChat'

const ChatBubble = () => {

    const {data,error} = useFetchChat()

  
  return (

    
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
                    {/* Incoming message */}
                   {data?.chats.map((chat)=><div key={chat.id} className="flex items-start space-x-3">
                        <img
                            src="https://ui-avatars.com/api/?name=John"
                            alt="John"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="bg-white px-4 py-2 rounded-lg shadow text-gray-800 max-w-xs">
                            {chat.text}
                        </div>
                    </div>) }
                    {/* Outgoing message */}
                   
                    <div className="flex items-end justify-end space-x-3">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow max-w-xs">
                            I'm good, thanks! How about you?
                        </div>
                        <img
                            src="https://ui-avatars.com/api/?name=User"
                            alt="User"
                            className="w-8 h-8 rounded-full"
                        />
                    </div>
                    {/* More messages can go here */}
                </div>
  )
}

export default ChatBubble