import React, { Fragment } from 'react'
import Login from '../../../pages/screen/auth/components/login/Login'
import LogOut from '../../../pages/screen/auth/components/logout/LogOut'
import Register from '../../../pages/screen/auth/components/register/Register'

const Auth = () => {
    return (
        <Fragment>
            <Login />
            <Register/>
            <LogOut />
        </Fragment>
    )
}

export default Auth
