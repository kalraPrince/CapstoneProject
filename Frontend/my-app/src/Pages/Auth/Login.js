import React from "react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import '../../Styles/Login.css'
const Login=()=>{
    
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [emailErr,setEmailerr]=useState('')
    const [passwordErr,setPassworderr]=useState("")
    const bgstyle={color:"red"}

    

    const handleChange=(e,key)=>{
        
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    
    const handleBlurEvent=(e,key)=>{
        if(key==='email'){
         if(e.target.value){
             setEmailerr(e.target.value)
             setEmailerr('')   
         }
         else{
             setEmailerr('Please Enter the Email !')
         }
        }
        if(key==='password'){
         if(e.target.value){
             setPassworderr(e.target.value)
             setPassworderr('')
         }
         else{
             setPassworderr('Please Enter the Password !')
         }
        }
       
     }


    return(
        <section className="Form">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="img-fluid" alt=""></img>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-row">
                            <h4 className="login-h4">Sign In</h4>
                            <input type='text' placeholder="Email address"  onChange={(e) => handleChange(e, "email")} onBlur={(e) => handleBlurEvent(e, 'email')} ></input>
                            <h6 style={bgstyle}>{emailErr}</h6>
                            <input type='password' placeholder="Password" onChange={(e) => handleChange(e, "password")} onBlur={(e) => handleBlurEvent(e, 'password')}></input>
                            <h6 style={bgstyle}>{passwordErr}</h6>
                            <select >
                                <option value="" disabled selected>Select role</option>
                                <option>Admin</option>
                                <option>User</option>
                            </select>
                            <Link to='/'><p className="login-a"> Forget password ?</p></Link>
                            <button className="login-btn">Login</button>
                            <br />
                            <Link to='/Register'><p className="login-b">Don't have an Account? Sign Up</p></Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
         
         
        
    )
}
export default Login