import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {playlistsThunks, selectPlaylists} from '../p2-bll/playlistsReducer'
import {useActions} from "../../../i1-main/m2-bll/helpers";
import {selectApp} from "../../../i1-main/m2-bll/appReducer";
import s from './PlaylistPage.module.css'
import {Button} from "antd";
import {postTest} from "../p3-dal/PlaylistsTests";

const PlaylistsPage = () => {
    const {playlists} = useSelector(selectPlaylists)
    const {isLoading} = useSelector(selectApp)
    const {getPlaylists, addPlaylist, deletePlaylist, updatePlaylist} = useActions(playlistsThunks)

    // useEffect(() => {
    //     getPlaylists()
    // }, [getPlaylists])

    const mappedPlaylists = playlists.map(p => {
        const mappedTags = p.tags.map(t => (
            <span key={t}>{t},</span>
        ))

        return (
            <div key={p._id}>
                <div style={{display: "inline-block", width: 100}}>{p.name}</div>
                <div style={{display: "inline-block", width: 100}}>{p.levelAccess}</div>
                <div style={{display: "inline-block", width: 100}}>{new Date(p.updated).toLocaleDateString()}</div>
                <div style={{display: "inline-block", width: 100}}>[{mappedTags}]</div>

                {/*<div className={s.button} style={{display: "inline-block", width: 30,*/}
                {/*     margin: 5*/}
                {/*}}>*/}
                    <Button
                        className={s.button}
                    // style={{
                    //     background: "black",
                    //     width: '100%', outline: "none"
                    // }}
                    disabled={isLoading} onClick={() => deletePlaylist({id: p._id})}
                >
                        X
                    </Button>
                {/*</div>*/}

                <button
                    // style={{background: "black"}}
                    disabled={isLoading} onClick={() => updatePlaylist({id: p._id})}
                >+++</button>
            </div>
        )
    })

    return (
        <div>
            <button onClick={postTest}>test add</button>


            pl
            <button
                // style={{background: "black"}}
                disabled={isLoading} onClick={addPlaylist}>add</button>
            <div>
                {mappedPlaylists}
            </div>
        </div>
    )
}

export default PlaylistsPage
