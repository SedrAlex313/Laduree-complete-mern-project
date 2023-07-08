import React, { useState } from 'react'
import Header from '../../components/header/Header';
import './SignIn.css'
import { Link } from 'react-router-dom';

const SignIn = () => {
     const[email ,setEmail] = useState("")
     const[password ,setPassword] = useState("")

     const loginUser = () => {};

     const handleInputChange = () => {};
  return (
    

         <div className='main__container2'>
            <Header />

             <div className='Glass__effect'>
                <div className='Initial__Text1'>
                    Log into your account
                </div>

                        <div className='Input__Container' onSubmit={loginUser} >
                      

                             <input
                              className='Styled__Input'  
                              type={"email"}
                              placeholder='Email' 
                              required 
                              name ="email"
                              value={email}
                              onChange={handleInputChange} 
                            />
                             <input 
                             className='Styled__Input'  
                             type={"password"} 
                             placeholder='Password'
                             required 
                              name ="password"
                              value={password}
                              onChange={handleInputChange}  />
                         </div>

    
                            <div className='Button__Container'>           
                                 <button type="submit " className='Styled__Button'> Sign in </button>
                            </div>
                              <Link to="/forgot" className='forget__password'>Forgot Password</Link>
                              <p className="account"> Don't have an account? &nbsp; </p>
                              <Link to="/signUp" className='register'>Register</Link>
                        </div>
                   </div>
    
         

  )
}

export default SignIn