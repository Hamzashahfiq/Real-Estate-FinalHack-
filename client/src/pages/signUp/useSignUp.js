import { useState } from "react"
import { AddUser } from "../../store/AuthSlice"
import { useDispatch } from "react-redux"

const userData = {
    userName: '',
    password: '',
    mobileNo: '',
    address:''
}
export default function useSignUp() {
    const dispatch = useDispatch()
    const [userDetail, setUserDetail] = useState(userData)
    const [signUpLoading, setSignUpLoading]= useState(false)
    const statesHandler = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }
    const signUpHandler = (e) =>{
        console.log('hallosign')
        e.preventDefault();
        if (!userDetail.userName ||!userDetail.password || !userDetail.mobileNo ||!userDetail.address){
            alert('Required all input data first');
            return;
        }
        dispatch(AddUser({userDetail, setSignUpLoading,setUserDetail,userData}))
    }
    const phoneNoHandler = (value) =>{
        setUserDetail({ ...userDetail,mobileNo :value })
    }


  
    return (
        {
            userDetail,
            statesHandler,
            signUpHandler,
            phoneNoHandler,
            signUpLoading
        }
    )
}
