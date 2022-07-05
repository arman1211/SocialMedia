import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className="auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="webname">
                    <h1>Web Zone Social</h1>
                    <h6>Explore everything</h6>
                </div>
            </div>
            <div className="a-right">
                <form className='a-form'>

                    <div className="a-email">
                        <span>Email: </span>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="a-email">
                        <span>Passw: </span>
                        <input type="password" placeholder='password' />
                    </div>
                </form>
                <div className="button i-button">Login</div>
            </div>
        </div>
    )
}

export default Auth