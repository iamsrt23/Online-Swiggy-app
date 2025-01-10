import React, {useState} from 'react'
import API_PATH from '../../data/apiPath'

const LoginFile = ({showWelcomeHandler}) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const loginHandler = async (e)=>{
    e.preventDefault();

    try {
      const response = await fetch(`${API_PATH}vendor/login`,{
        method:'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,password
        })
        
      })

      const data = await response.json();
      if(response.ok){
        alert('Login Suceessfully')
        setEmail("")
        setPassword("")
        // to store the jwt token in localstorage in key value
        localStorage.setItem('loginToken',data.token) // token variable defined in backend
        showWelcomeHandler()
      }
      
    } catch (error) {
      console.error(error)

      
    }
    

  }
  return (
    <div className="loginSection">
        
        <form className='authForm' onSubmit={loginHandler}>
            <h3>Vendor Login</h3>
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' /><br />
            <label>password</label>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your password"/><br />

            <div className="btnSubmit">
            <button type='submit'>submit</button>

            </div>

        </form>
    </div>
  )
}

export default LoginFile