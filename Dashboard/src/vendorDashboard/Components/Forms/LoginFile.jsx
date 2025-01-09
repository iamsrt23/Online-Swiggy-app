import React from 'react'

const LoginFile = () => {
  return (
    <div className="loginSection">
        
        <form className='authForm'>
            <h3>Vendor Login</h3>
            <label>Email</label>
            <input type="text" placeholder='Enter your email' /><br />
            <label>password</label>
            <input type="password" placeholder="Enter Your password"/><br />

            <div className="btnSubmit">
            <button>submit</button>

            </div>

        </form>
    </div>
  )
}

export default LoginFile