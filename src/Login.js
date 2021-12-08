import React from 'react'
import './Login.css'
import { auth } from "./firebase"
import { useState } from 'react'
 
function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic]= useState("")

    const register = () => {
        if (!name) {
            return alert('Please enter a full name !')
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL: profilePic,
            })
        })
    };
   
    const loginToApp =(e) => {
       e.preventDefault()
    };

    
    return (
        <div className="login">
           <img src="http://www.mahesh-europe.com/wp-content/uploads/2020/07/Linkedin-Logo-2011%E2%80%932019.png" alt="" />
            <form>
                <input 
                value={name} onChange={(e) => setName(e.target.value)}
                 placeholder="Full name(required if registering)" type="text"/>
                <input 
                value={profilePic} onChange={(e) => setProfilePic(e.target.value)}
                placeholder="Profile pic URL(Optional)"
                />


                <input 
                placeholder="Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                  type="email" />
                <input
                
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 placeholder='Password' type="password" />
                <button type="submit" onClick={loginToApp}> Sign In</button>
            </form>
            <p> Not a member ? {" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
