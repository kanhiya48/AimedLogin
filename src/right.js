import React, { useState } from 'react'
import { Checkbox, Heading, Input, Labe, Login, Smalltext } from './sty'

export const Right = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [passview,setpassview]=useState(false);
  return (
     <div className='rightcss'>
      
    <Heading> LOGIN</Heading>
    <div>
      <Labe>LOGIN ID</Labe>
      
      <Input bor="solid" placeholder="Enter Login Id"></Input>
      <br></br>
      <br></br>
      <Labe>Password</Labe>
      <div className={`passinp ${isFocused ? 'focused' : ''}`}>
      <Input type={passview ? 'text':'password'} bor="none" onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} placeholder='Enter Password'></Input>
      <span className='vec' onClick={()=>{
        setpassview(!passview);
      }}><img src='bi_eye-slash-fill.png' alt='no'></img></span>
      </div>
      <div className='sep'>
        <div className='sep'>
          
      <Checkbox type="checkbox"></Checkbox>
      <Smalltext color='#737B86'>RememberMe</Smalltext>
      </div>
      
      <Smalltext color=' #F78719;'>Change Password</Smalltext>
</div>
      <br></br>
  
      <Checkbox type="checkbox" ></Checkbox>
      <Smalltext color='#737B86' >Agree To <span>Terms and Conditions</span></Smalltext>
     <br></br>
     <br></br>
      <div className='cenbtn'>
       <Login>Login</Login>
       </div>
        <div className='cenbtn'>
          <Smalltext color ='#04072F'>Don't have an account? <span>Register Here</span></Smalltext>
        </div>
    </div>
    
    </div>
  )
}
