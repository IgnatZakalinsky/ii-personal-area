import React from 'react'
import {useSelector} from 'react-redux'
import {selectApp} from '../../i1-main/m2-bll/appReducer'
import avatar from './../../imgs/cat-avatar.jpg'
import s from './Profile.module.css'

const Profile = () => {
    const {user} = useSelector(selectApp)

    return (
        <div className={s.profile}>
            <img src={avatar} alt={'avatar'} className={s.avatar}/>

            <div className={s.info}>
                <div>{user.courseTitle}</div>
                <div>{user.level} lvl</div>
                <div className={s.long}>{user.firstName} {user.lastName}</div>
            </div>
        </div>
    )
}

export default Profile
