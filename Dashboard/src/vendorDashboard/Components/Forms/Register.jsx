import React,{useState} from 'react'

import API_PATH from '../../data/apiPath.js';

const Register = ({showLoginHandler}) => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(true)
  // To prevent Page Loading
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await fetch(`${API_PATH}vendor/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      // we have to refresh the Register form after submit
     
      const data = await response.json()
      if(response.ok){
        console.log(data)
        setUsername("");
        setEmail("")
        setPassword("")
        alert("Vendor registered Successfully")
        // after Register successfully we have to call login page so below fucntion calls the login page
        showLoginHandler()
      }
    

    } catch (error) {
      console.error("Registration Failed", error);
      alert("Registration Failed")
      
    }

  }
  return (
   <div className="registerSection">
        <form className='authForm' onSubmit={handleSubmit}>
            <h3>Vendor Register</h3>
            <label>username</label>
            <input type='text' name='username' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Your name' />
            <label>email</label>
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' /><br />
            <label>password</label>
            <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your password"/><br />

            <div className="btnSubmit">
            <button type='submit'>submit</button>

            </div>

        </form>

   </div>
  )
}

export default Register