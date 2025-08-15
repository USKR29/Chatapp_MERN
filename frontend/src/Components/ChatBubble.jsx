import React, { useContext } from 'react'
import useFetchChat from '../hooks/useFetchChat'
import { AuthContext } from '../Context/AuthContext'

const ChatBubble = ({rId}) => {

    const {data,error} = useFetchChat()
    const {user} = useContext(AuthContext)

    if(!user){
        return <div>Loading....</div>
    }



    const currentId = user.uId;
    const recvId = rId;
  
  return (

    
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
            {error && <div>{error}</div>}
            {data?.chats?.map((chat) => {
                const isOutgoing = chat.senderId === currentId;
                return (
                    <div
                        key={chat._id}
                        className={`flex items-end space-x-3 ${isOutgoing ? 'justify-end' : 'justify-start'}`}
                    >
                        {!isOutgoing && (
                            <img
                                src={`https://ui-avatars.com/api/?name=Friend`}
                                alt="Friend"
                                className="w-8 h-8 rounded-full"
                            />
                        )}
                        <div
                            className={`px-4 py-2 rounded-lg shadow max-w-xs ${
                                isOutgoing
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-gray-800'
                            }`}
                        >
                            {chat.text}
                        </div>
                        {isOutgoing && (
                            <img
                                src={`https://ui-avatars.com/api/?name=You`}
                                alt="You"
                                className="w-8 h-8 rounded-full"
                            />
                        )}
                    </div>
                );
            })}
        </div>
  )
}

export default ChatBubble