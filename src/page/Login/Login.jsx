import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoCigar from "../../assets/img/logo/logo.png";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleButton from 'react-google-button';
import { auth } from '../../firebase/firebase';
import Register from './Register';

function Login() {
    const [loginUser, setLoginUser] = useState({ username: '', password: '' })
    const [registerUser, setRegisterUser] = useState({ username: '', password: '' })
    const navigate = useNavigate();

    //firebase USER current
    const [user] = useAuthState(auth);
    console.log(user, 'userFirebase')

    //firebase login logout with email and password
    const handleLogin = async (e) => {
        e.preventDefault()

        const email = loginUser.username;
        const password = loginUser.password;

        if (email != '' && password != '') {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log(userCredential.user)

            }
            catch (err) {
                alert('Wrong password or username (' + err.message + ')')
            }
        }
        else {
            alert('Enter your account, please !')
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        const email = registerUser.username;
        const password = registerUser.password;

        if (email != '' && password != '') {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                alert('Create successed' + userCredential.user)

            }
            catch (err) {
                alert('This username already exist (' + err.message + ')')
            }
        }
        else {
            alert('Please enter your information before register !')
        }

        setRegisterUser({ username: '', password: '' })
    }

    const minitorAuthState = async () => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('onAuthYESSSSS')
            }
            else {
                console.log('onAuthNOOOOOO')

            }
        })
    }
    minitorAuthState()

    const handleChangeLogin = (e) => {
        setLoginUser(pre => ({ ...pre, [e.target.name]: e.target.value }))

    }
    const handleChangeRegister = (e) => {
        setRegisterUser(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }

    /// firebase login logout with GOOGLE
    const googleSignIn = async (e) => {
        e.preventDefault()

        const provider = new GoogleAuthProvider();
        console.log(auth, provider)
        await signInWithRedirect(auth, provider)

    }
    const logOut = async () => {
        await signOut(auth);
    }

    useEffect(() => {
        if (user != null) {
            navigate('/')
        }
        console.log('userLoginFirebase', user != null)
    }, [user])


    return (
        <>
            <div className="breadcrumb_content">
                <h3>login to <NavLink style={{ marginLeft: '10px', cursor: 'pointer' }}><img src={logoCigar} alt="" /></NavLink></h3>
                <NavLink to='/' style={{ cursor: 'pointer', position: 'absolute', top: '15px', left: '20px' }}>Back Home</NavLink>
            </div>
            <div className="customer_login">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6">
                            <div className="account_form login">
                                <h2>login</h2>
                                <form>
                                    <p>
                                        <label>Username or email <span>*</span></label>
                                        <input type="text" name="username" value={loginUser.username} onChange={handleChangeLogin} />
                                    </p>
                                    <p>
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" name="password" value={loginUser.password} onChange={handleChangeLogin} />
                                    </p>
                                    <div className="login_submit d-flex align-items-center justify-content-between">
                                        {!user
                                            ? <>
                                                <button type="submit" onClick={handleLogin}>login</button>
                                                <GoogleButton onClick={(e) => googleSignIn(e)} />
                                            </>
                                            : <button onClick={() => logOut()} style={{ background: '#1e6e99' }} >Logout</button>}
                                    </div>

                                </form>
                            </div>
                        </div>

                        <Register
                            registerUsername={registerUser.username}
                            registerPassword={registerUser.password}
                            handleChangeRegister={handleChangeRegister}
                            handleRegister={handleRegister}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login