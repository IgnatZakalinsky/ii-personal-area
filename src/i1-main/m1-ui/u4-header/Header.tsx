import React from 'react'
import {PageHeader, Divider} from 'antd'
import {NavLink} from 'react-router-dom'
import {PATH} from '../u3-routes/Routes'

const Header = React.memo(() => {

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
                    // <NavLink to={PATH.LOGIN} key={PATH.LOGIN}>login</NavLink>,
                    <NavLink to={PATH.PROFILE} key={PATH.PROFILE}>profile</NavLink>,
                    // <NavLink to={PATH.PLAYLISTS} key={PATH.PLAYLISTS}>playlists</NavLink>,
                ]}
            />
            <Divider/>
        </>
    )
})

export default Header
