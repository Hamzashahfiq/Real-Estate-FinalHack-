import { useState } from "react"
import { LoginUser } from "../../store/AuthSlice"
import { useDispatch } from "react-redux"

const userData = {
    userName: '',
    password: '',
}
export default function useLogin() {
    const dispatch = useDispatch()
    const [userDetail, setUserDetail] = useState(userData)
    const [loginLoading, setLoginLoading]= useState(false)
    const statesHandler = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }
    const LoginHandler = (e) =>{
        e.preventDefault();
        if (!userDetail.userName ||!userDetail.password){
            alert('Required all input data first');
            return;
        }
        dispatch(LoginUser({userDetail, setLoginLoading,setUserDetail,userData}))
    }


  
    return (
        {
            userDetail,
            statesHandler,
            LoginHandler,
            loginLoading
        }
    )
}
