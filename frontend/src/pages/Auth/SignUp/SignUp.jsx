import React from 'react'
import './SignUp.css'
import Header from '../../../components/header/Header'

const SignUp = () => {
  return (
         <div className='main__container'>
          <Header />
             <div className='Glass__effect'>
                <div className='Initial__Text'>
                  Create your account                
                  </div>
                        <div className='Input__Container'>
                             <input className='Styled__Input'  type={"text"} placeholder='Email' />
                             <input className='Styled__Input'  type={"password"} placeholder='Password' />
                             <input className='Styled__Input'  type={"password"} placeholder='Repeat Password' />

    
                        </div>
                            <div className='Button__Container'>           
                                 <button className='Styled__Button'> Sign up </button>
                            </div>
                        </div>
                   </div>
    
         

  )
}

export default SignUp