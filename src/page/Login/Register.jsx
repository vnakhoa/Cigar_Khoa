import React from 'react'

function Register({registerUsername, registerPassword, handleChangeRegister, handleRegister}) {
  return (
    <div className="col-lg-6 col-md-6">
    <div className="account_form register">
        <h2>Register</h2>
        <form>
            <p>
                <label>Email address  <span>*</span></label>
                <input type="text" name="username" value={registerUsername} onChange={handleChangeRegister} />
            </p>
            <p>
                <label>Passwords <span>*</span></label>
                <input type="password" name="password" value={registerPassword} onChange={handleChangeRegister} />
            </p>
            <div className="login_submit">
                <button type="submit" onClick={handleRegister}>Register</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Register