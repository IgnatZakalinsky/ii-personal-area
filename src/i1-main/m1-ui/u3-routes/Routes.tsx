import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import PlaylistsPage from '../../../i2-features/f3-playlists/p1-ui/PlaylistsPage'
import LoginPage from '../../../i2-features/f1-login/l1-ui/LoginPage'

export const PATH = {
    LOGIN: '/login',
    PROFILE: '/profile',
    PLAYLISTS: '/playlists',
}

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

            <Route path={PATH.LOGIN + '/:token'} render={() => <LoginPage/>}/>
            <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>

            <Route path={PATH.PROFILE} render={() => <div>profile</div>}/>
            <Route path={PATH.PLAYLISTS} render={() => <PlaylistsPage/>}/>

            <Route render={() => <div>404</div>}/>
        </Switch>
    )
}

export default Routes
