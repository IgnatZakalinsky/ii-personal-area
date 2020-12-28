import thunkMiddleware from 'redux-thunk'
import {combineReducers} from 'redux'
import {appReducer} from './appReducer'
import {configureStore} from '@reduxjs/toolkit'
import {playlistsReducer} from '../../i2-features/f3-playlists/p2-bll/playlistsReducer'
import {loginReducer} from '../../i2-features/f1-login/l2-bll/loginReducer'

const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
    playlists: playlistsReducer,
})

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for developers


