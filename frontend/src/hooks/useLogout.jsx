import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

const useLogout=()=>{

    const{dispatch}=useContext(AuthContext)

    const navigator = useNavigate();

    const logout=()=>{

        dispatch({type: 'LOGOUT'});
        localStorage.removeItem('Token');
        navigator('/')

    }
    return {logout}
}

export default useLogout