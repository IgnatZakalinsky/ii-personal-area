import React from 'react'
import {useSelector} from "react-redux";
import {selectApp} from "../../i1-main/m2-bll/appReducer";

const Profile = () => {
    const {user} = useSelector(selectApp)

    return (
        <div style={{marginLeft: 30}}>
            <div>{user.courseTitle}</div>
            <div>{user.level} lvl</div>
            <div>{user.firstName} {user.lastName}</div>
        </div>
    )
}

export default Profile
