import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {message} from 'antd'
import {Redirect} from 'react-router-dom'
import CustomSpin from '../u5-spins/CustomSpin'
import {selectApp} from '../../../m2-bll/appReducer'
import {PATH} from '../../u3-routes/Routes'

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type AuthRedirectPagePropsType = DivPropsType & {

}

const AuthRedirectPage: React.FC<AuthRedirectPagePropsType> = React.memo((
    {

        ...restProps
    }
) => {
    const {isAuth} = useSelector(selectApp);
    const [firstRendering, setFirstRendering] = useState<boolean>(true);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [spin, setSpin] = useState<boolean>(!isAuth)

    useEffect(() => {
        if (firstRendering) {

            if (!isAuth) {
                message.error('Not logged in!')
                setTimeout(() => setRedirect(true), 1500);
            }
            setFirstRendering(false) // + rerender
        } else {
            spin && setSpin(false)
        }
    }, [firstRendering, setFirstRendering, isAuth, setRedirect, spin, setSpin]);

    if (redirect) return <Redirect to={PATH.LOGIN}/>;
    if (spin) return <CustomSpin/>;

    return (
        <>
            <div {...restProps}/>
        </>
    )
})

export default AuthRedirectPage
