import React from 'react'
import {PageHeader, Divider} from 'antd'
import {NavLink} from 'react-router-dom'
import {PATH} from '../u3-routes/Routes'
import {useActions} from '../../m2-bll/helpers'
import {appThunks, selectApp} from '../../m2-bll/appReducer'
import {useSelector} from 'react-redux'

const Header = React.memo(() => {
    const {logoutThunk} = useActions({...appThunks})
    const {isVerified} = useSelector(selectApp)

    return (
        <>
            <PageHeader
                title={(
                    <>
                        Personal Area
                    </>
                )}
                subTitle={(
                    <a
                        href={'https://it-incubator.by/'}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        it-incubator
                    </a>
                )}
                extra={[
                    !isVerified && <NavLink to={PATH.LOGIN} key={PATH.LOGIN}>LOGIN</NavLink>,
                    isVerified && <NavLink to={PATH.PROFILE} key={'PROFILE'}>PROFILE</NavLink>,
                    // <NavLink to={PATH.PROFILE} key={'PROFILE'}>PROFILE</NavLink>,
                    isVerified && <NavLink to={PATH.PLAYLISTS} key={PATH.PLAYLISTS}>PLAYLISTS</NavLink>,
                    isVerified && <NavLink to={PATH.LOGIN} key={'LOGOUT'} onClick={logoutThunk}>LOGOUT</NavLink>,

                ]}
            />
            <Divider/>
        </>
    )
})

export default Header
