import React from 'react'

export const Messanger = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Sidebar: Users List */}
            <div className="w-1/4 bg-white border-r flex flex-col">
                <div className="px-6 py-4 border-b">
                    <span className="font-bold text-xl">Chats</span>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {/* Example users */}
                    <div className="flex items-center px-6 py-3 hover:bg-gray-100 cursor-pointer border-b">
                        <img
                            src="https://ui-avatars.com/api/?name=John"
                            alt="John"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                            <div className="font-semibold">John Doe</div>
                            <div className="text-xs text-gray-500">Hey, how are you?</div>
                        </div>
                    </div>
                    <div className="flex items-center px-6 py-3 hover:bg-gray-100 cursor-pointer border-b">
                        <img
                            src="https://ui-avatars.com/api/?name=Jane"
                            alt="Jane"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                            <div className="font-semibold">Jane Smith</div>
                            <div className="text-xs text-gray-500">Let's catch up!</div>
                        </div>
                    </div>
                    {/* Add more users as needed */}
                </div>
            </div>

            {/* Right Side: Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
                    <div className="flex items-center space-x-3">
                        <img
                            src="https://ui-avatars.com/api/?name=John"
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="font-semibold text-lg">Chat with John Doe</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
                    {/* Incoming message */}
                    <div className="flex items-start space-x-3">
                        <img
                            src="https://ui-avatars.com/api/?name=John"
                            alt="John"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="bg-white px-4 py-2 rounded-lg shadow text-gray-800 max-w-xs">
                            Hi! How are you?
                        </div>
                    </div>
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

                {/* Input */}
                <div className="px-6 py-4 bg-white flex items-center space-x-3 border-t">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
