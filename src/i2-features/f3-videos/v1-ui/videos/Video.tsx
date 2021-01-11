import React, {useState} from 'react'
import {VideoType} from './Videos'
import s from './Video.module.css'

type VideoPropsType = {
    video: VideoType
}

const Video: React.FC<VideoPropsType> = ({video}) => {
    const [isShow, setShow] = useState(false)

    const mappedTags = video.tags.map((t, i) => (
        <span key={video._id + i}>#{t} </span>
    ))

    const setShowSwitch = () => setShow(s => !s)

    return (
        <>
            <div className={s.v}>
                <div className={s.name} onClick={setShowSwitch}>{video.name}</div>
                <div className={s.tags}>{mappedTags}</div>
                <div className={s.updated}>{new Date(video.updated).toLocaleDateString()}</div>
                <div className={s.created}>{new Date(video.created).toLocaleDateString()}</div>
            </div>
            {isShow && (
                <iframe
                    width='560'
                    height='315'
                    src={video.url} // ?start=61 (1:01)
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                />
            )}
        </>
    )
}

export default Video
