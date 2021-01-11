import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import PlaylistsPage from '../../../i2-features/f3-playlists/p1-ui/PlaylistsPage'
import LoginPage from '../../../i2-features/f1-login/l1-ui/LoginPage'
import AuthRedirectPage from '../u0-common/u4-redirets/AuthRedirectPage'
import ProfilePage from '../../../i2-features/f2-profile/ProfilePage'
import VideosPage from '../../../i2-features/f3-videos/v1-ui/VideosPage'

export const PATH = {
    LOGIN: '/login',
    PROFILE: '/profile',
    PLAYLISTS: '/playlists',
    VIDEOS: '/videos',
}

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>

            <Route path={PATH.LOGIN + '/:token'} render={() => <LoginPage/>}/>
            <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>

            <Route path={PATH.PROFILE} render={() => <AuthRedirectPage><ProfilePage/></AuthRedirectPage>}/>
            <Route path={PATH.PLAYLISTS} render={() => <AuthRedirectPage><PlaylistsPage/></AuthRedirectPage>}/>
            <Route
                path={PATH.VIDEOS + '/:playlistId'}
                render={() => <AuthRedirectPage><VideosPage/></AuthRedirectPage>}
            />

            <Route render={() => <div>404</div>}/>
        </Switch>
    )
}

export default Routes
