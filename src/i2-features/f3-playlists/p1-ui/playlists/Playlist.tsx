import React from 'react'
import {PlaylistType} from './MappedPlaylists'
import s from './Playlist.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../../i1-main/m1-ui/u3-routes/Routes'

type PlaylistPropsType = {
    playlist: PlaylistType
}

const Playlist: React.FC<PlaylistPropsType> = ({playlist}) => {
    const mappedTags = playlist.tags.map((t, i) => (
        <span key={playlist._id + i}>#{t} </span>
    ))

    return (
        <div className={s.pl}>
            <NavLink to={PATH.VIDEOS + '/' + playlist._id} className={s.name}>{playlist.name}</NavLink>
            <div className={s.tags}>{mappedTags}</div>
            <div className={s.updated}>{new Date(playlist.updated).toLocaleDateString()}</div>
            <div className={s.created}>{new Date(playlist.created).toLocaleDateString()}</div>
        </div>
    )
}

export default Playlist
