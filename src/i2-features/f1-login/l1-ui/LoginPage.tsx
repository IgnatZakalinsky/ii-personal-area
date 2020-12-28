import React from 'react'
import s from './LoginPage.module.css'
import LoginFormContainer from './LoginForm/LoginFormContainer'

const LoginPage = React.memo(() => {

    return (
        <div className={s.LoginPage}>
            <LoginFormContainer/>

            {/*NewsContainer*/}

            {/*ChatContainer*/}

            {/*HelperBotContainer*/}
        </div>
    )
})

export default LoginPage
