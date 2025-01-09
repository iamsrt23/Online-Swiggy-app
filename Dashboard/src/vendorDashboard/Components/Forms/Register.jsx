import React from 'react'

const Register = () => {
  return (
   <div className="registerSection">
        <form className='authForm'>
            <h3>Vendor Register</h3>
            <label>Username</label>
            <input type='text' placeholder='Enter Your name' />
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

export default Register