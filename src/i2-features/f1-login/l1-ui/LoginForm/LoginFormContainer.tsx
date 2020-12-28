import React, {useCallback, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Redirect, useParams} from 'react-router-dom'
import {message} from 'antd'
import LoginForm from './LoginForm'
import {loginActions, loginThunks, selectLogin} from '../../l2-bll/loginReducer'
import {PATH} from '../../../../i1-main/m1-ui/u3-routes/Routes'
import CustomSpin from '../../../../i1-main/m1-ui/u0-common/u5-spins/CustomSpin'
import {useActions} from '../../../../i1-main/m2-bll/helpers'

const LoginFormContainer = React.memo(() => {
    const {token: tokenInParams} = useParams()
    const [token, setToken] = useState<string>(tokenInParams)
    const {isLoading, error, isSuccess} = useSelector(selectLogin)
    const [firstRendering, setFirstRendering] = useState<boolean>(true)
    const [redirect, setRedirect] = useState<boolean>(false)
    const [spin, setSpin] = useState<boolean>(!!tokenInParams)
    const {sendTokenThunk, clear} = useActions({...loginActions, ...loginThunks})

    const sendToken = useCallback(() => {
        if (!isLoading && !isSuccess && token) {
            sendTokenThunk({token})
        } else {
            !token && !firstRendering && message.error('no token')
        }
    }, [isLoading, isSuccess, sendTokenThunk, token, firstRendering])

    useEffect(() => {
        if (firstRendering) {
            clear({})
            sendToken()

            setFirstRendering(false); // + rerender
        } else {
            if (isSuccess && !redirect) {
                message.success('ok!', 1)
                setTimeout(() => setRedirect(true), 500)
            }
            if (error) {
                if (spin) setSpin(false)
                else {
                    message.error(error)
                    clear({})
                }
            }
        }
    }, [firstRendering, setFirstRendering, isSuccess, error, tokenInParams, sendToken, spin, clear, redirect])

    // callbacks
    // const onFinish = useCallback((values: LoginFormDataType) => {
    //     console.log(values)
    //     sendToken()
    // }, [sendToken])
    // const onFinishFailed = useCallback((errorInfo: LoginFormErrorDataType) => {
    //     console.error('Failed:', errorInfo)
    //     message.error(errorInfo.errorFields[0].errors)
    // }, [])

    // render
    if (redirect) return <Redirect to={PATH.PROFILE}/>
    if (spin) return <CustomSpin/>

    return (
        <>
            <LoginForm
                loading={isLoading}
                token={token}
                setToken={setToken}
                sendToken={sendToken}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
            />
        </>
    )
})

export default LoginFormContainer


