import { createContext, useEffect, useReducer } from "react";


export const AuthContext = createContext();

export const Authreducer=(state,action)=>{

    switch(action.type){
        case 'LOGIN':
            return {user : action.payload}
        case 'LOGOUT':
            return {user: null}
        default: 
            return state
    }

}


export const AuthContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(Authreducer,{
        user: null
        
        
    })
console.log(state)

useEffect(()=>{
    const token = localStorage.getItem('Token')

    if(token){
        dispatch({type:'LOGIN', payload: JSON.parse(token)})
    }
},[]);

return(
    <AuthContext.Provider value={{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
)
}