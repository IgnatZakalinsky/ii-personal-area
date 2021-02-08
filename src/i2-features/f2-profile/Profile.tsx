import React, {ChangeEvent} from 'react'
import {useSelector} from 'react-redux'
import {appActions, selectApp} from '../../i1-main/m2-bll/appReducer'
import avatar from './../../imgs/cat-avatar.gif'
import s from './Profile.module.css'
import {instance} from "../../i1-main/m3-dal/instance";
import {useActions} from "../../i1-main/m2-bll/helpers";
import {message} from "antd";

const Profile = () => {
    const {user} = useSelector(selectApp)
    const {changeAvatar} = useActions(appActions)

    const ref = React.createRef<HTMLInputElement>()

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()

        const newFile = e.target.files && e.target.files[0]

        if (newFile && newFile.size < (1048576 * 2)) {
            // setFileURL(window.URL.createObjectURL(newFile))
            reader.onloadend = () => {
                instance.put('/auth/me', {id: user._id, avatar: reader.result})
                    .then(x => {
                        changeAvatar({avatar: typeof reader.result === 'string' ? reader.result : ''})
                    })
            }
            reader.readAsDataURL(newFile)
        } else {
            message.warn('Разрешены файлы только до 2Мб!')
        }
    }

    return (
        <div className={s.profile}>
            <img
                src={user.avatar || avatar}
                alt={'avatar'}
                className={s.avatar}
                onClick={() => {
                    ref.current?.click()
                }}
            />
            <input
                type={'file'}
                style={{display: 'none'}}
                ref={ref}
                onChange={change}
                accept={'image/jpeg,image/png,image/gif'}
            />

            <div className={s.info}>
                <div>{user.courseTitle}</div>
                <div>{user.level} lvl</div>
                <div className={s.long}>{user.firstName} {user.lastName}</div>
            </div>
        </div>
    )
}

export default Profile
