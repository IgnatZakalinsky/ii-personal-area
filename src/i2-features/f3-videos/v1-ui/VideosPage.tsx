import React from 'react'
import Videos from './videos/Videos'
import s from './VideosPage.module.css'

const VideosPage = () => {


    return (
        <div className={s.main}>
            {/*before videos*/}

            <Videos/>

            {/*after videos*/}
        </div>
    )
}

export default VideosPage
