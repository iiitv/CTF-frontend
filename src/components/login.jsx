import React from 'react'
import { useState ,useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { login, logout } from "../features/user"
function Login() {
    const dispatch = useDispatch()
    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const user = useSelector( (state) => state.user.value)
    useEffect(() => {
        console.log(user)
    }, [user])

    const loginHandler = () => {
        setIsLogin(true)
        dispatch(login({
            name:userName,
            email:email,
            isAuthenticate:true
        }))
    }
    const logoutHandler = () => {
        setIsLogin(true)
        dispatch(logout())
    }
    return (
        <div>
            <input type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="text" placeholder="Username" onChange={(e)=>{setuserName(e.target.value)}}/>
            <button onClick={loginHandler}> Login </button>
            <button onClick={logoutHandler}> Logout </button>
            {isLogin && <h1>{user.name}</h1>}
        </div>
    )
}

export default Login
