import React from 'react'
import {VideoType} from './Videos'
import Video from './Video'

type MappedVideosPropsType = {
    videos: VideoType[]
}

const MappedVideos: React.FC<MappedVideosPropsType> = ({videos}) => {
    const mappedVideos = videos.map(v => (<Video key={v._id} video={v}/>))

    return (
        <>
            {mappedVideos}
        </>
    )
}

export default MappedVideos
