import { useState } from "react"
import { useEffect } from "react"

const useFetchChat = ()=>{

    const [data,setData]=useState('')
    const [error,setError]=useState('')

    useEffect(()=>{

        const getChats=async()=>{

            try {

                const chats = await fetch('/api/message')

                if(!chats.ok || !chats.status===200){

                    const err = await chats.json()

                    setError(err)
                }

                const chathistory = await chats.json()
                setData(chathistory)
                
            } catch (error) {

                throw new Error(error)
                
            }

        }
        getChats()

    },[])

   return {data, error}

}

export default useFetchChat;