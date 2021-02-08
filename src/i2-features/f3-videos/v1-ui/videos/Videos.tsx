import React from 'react'
import {useParams} from 'react-router-dom'
import MappedVideos from './MappedVideos'

export type VideoType = {
    _id: string
    playlistId: string

    name: string
    url: string
    tags: string[] //

    created: number //
    updated: number //
}

const videos: VideoType[] = [
    {
        _id: '1',
        playlistId: '1',
        name: '01. ReactJS - Путь Самурая - Как смотреть данный курс?',
        url: 'https://www.youtube.com/embed/gb7gMluAeao',
        tags: ['start', 'component', 'props',],
        created: Date.now(),
        updated: Date.now(),
    },
    {
        _id: '2',
        playlistId: '1',
        name: '02. Уроки React JS (Зачем NodeJS на фронте)',
        url: 'https://www.youtube.com/embed/WN2LHq3yRwQ',
        tags: ['nodejs',],
        created: Date.now(),
        updated: Date.now(),
    },
    {
        _id: '3',
        playlistId: '1',
        name: '03. Уроки React JS (Установка NodeJS)',
        url: 'https://www.youtube.com/embed/AUi1JT4n8xA',
        tags: ['nodejs',],
        created: Date.now(),
        updated: Date.now(),
    },
    {
        _id: '4',
        playlistId: '2',
        name: 'STEP_#01 2020-04-27',
        url: 'https://www.youtube.com/embed/47CaWYzF8YU',
        tags: ['start', 'component', 'props',],
        created: Date.now(),
        updated: Date.now(),
    },
    {
        _id: '5',
        playlistId: '2',
        name: 'STEP_#01 2020-05-25',
        url: 'https://www.youtube.com/embed/HbJPyGqJNT8',
        tags: ['start', 'component', 'props',],
        created: Date.now(),
        updated: Date.now(),
    },

]

const getVideos = (playlistId: string) => videos.filter(v => v.playlistId === playlistId)

const Videos = () => {
    const {playlistId} = useParams()

    return (
        <>
            {/*find*/}

            <MappedVideos videos={getVideos(playlistId)}/>

            {/*pagination*/}
        </>
    )
}

export default Videos
