import React from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {selectApp, appActions, appThunks, someThunkRej} from '../../../i1-main/m2-bll/appReducer'
import {useActions} from '../../../i1-main/m2-bll/helpers'

const Playlists = () => {
    const {x, y, z} = useSelector(selectApp)
    // const dispatch = useAppDispatch()
    const {setX, someThunk} = useActions({...appActions, ...appThunks})

    const test = () => {
        axios.post(
            'http://localhost:7542/1.0/playlists',
            {
                playlist: {
                    name: null,
                    levelAccess: null,
                    tags: ['aaa', null, 1, undefined],
                }
            }
        )
        // axios.delete(
        //     'http://localhost:7542/1.0/playlists/5f9ab62f2bac612710a02bdb',
        //     // {
        //     //     playlist: {
        //     //         name: 1,
        //     //         levelAccess: null,
        //     //         tags: ['aaa', null, 1, undefined],
        //     //     }
        //     // }
        // )


    }

    return (
        <div>
            x:{x};y:{y};z:{z};
            <button onClick={() => setX({x: x + 1})}>set x</button>
            <button onClick={async () => {
                const res = await someThunk({x: x + z})
                console.log('res', res)

                if (someThunkRej.match(res)) {
                    console.log('y', res.payload?.y)
                }
            }}>set z
            </button>
            <button onClick={test}>test</button>
        </div>
    )
}

export default Playlists
