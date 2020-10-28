import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Playlists from '../../../i2-features/f3-playlists/p1-ui/Playlists'

export const PATH = {
    LOGIN: '/login',
    PROFILE: '/profile',
    PLAYLISTS: 'playlists',
}

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.PLAYLISTS}/>}/>

            <Route path={PATH.LOGIN} render={() => <div>login</div>}/>
            <Route path={PATH.PROFILE} render={() => <div>profile</div>}/>
            <Route path={PATH.PLAYLISTS} render={() => <Playlists/>}/>

            <Route render={() => <div>404</div>}/>
        </Switch>
    )
}

export default Routes
