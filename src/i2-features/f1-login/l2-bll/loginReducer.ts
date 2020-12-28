import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppStoreType} from '../../../i1-main/m2-bll/store'
import {LoginAPI} from '../l3-dal/LoginAPI'
import {appActions} from "../../../i1-main/m2-bll/appReducer";

// < {answer}, {params}, {rejectValue {in catch}}>
export const sendTokenThunk =
    createAsyncThunk<{ error?: string }, { token: string }, { rejectValue: { token: string } }>(
        'login/sendTokenThunk',
        async (
            payload, thunkAPI
        ) => {
            // thunkAPI.getState() as AppStoreType
            thunkAPI.dispatch(loginActions.setLoading({isLoading: true}))

            try {
                // const p = await new Promise<{ error: string }>(((res, rej) => {
                //     if (payload.token.length > 3) setTimeout(() => res({error: ''}), 1500)
                //
                //     else setTimeout(() => rej({error: 'not valid token'}), 1500)
                // }))
                const p = await LoginAPI.login(payload.token)

                thunkAPI.dispatch(sendTokenThunk
                    .fulfilled({error: p.error}, 'xzId1', {token: payload.token}))
                thunkAPI.dispatch(appActions.setAuth({isAuth: true}))

                return p
            } catch (er) {
                const error = er.response ? er.response.data.error : (er.message + ', more details in the console')


                thunkAPI.dispatch(sendTokenThunk
                    .fulfilled({error}, 'xzId1', {token: payload.token}))

                console.log('er', {...er}, er)
                return thunkAPI.rejectWithValue({token: payload.token})
            }
        }
    )

const slice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        isSuccess: false,
        error: '',
    },
    reducers: {
        clear: (state, action: PayloadAction<void>) => {
            state.isLoading = false
            state.isSuccess = false
            state.error = ''
        },
        setLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading
        }

    },
    // extraReducers: {
    //     // 'blabla': state => {},
    //     // [someAC.type]: state => {},
    // },
    extraReducers: (builder) => {
        // builder.addCase(setX, (state, action) => {
        //     state.y = action.payload.x
        // })
        builder
            .addCase(
                sendTokenThunk.fulfilled,
                (state, action) => {
                    state.isSuccess = !action.payload.error
                    state.error = action.payload.error || ''
                    state.isLoading = false
                }
            )
        // .addCase() ...

    },
})

export const loginReducer = slice.reducer
export const loginActions = slice.actions
// export const someThunkRej = someThunk.rejected
export const loginThunks = {sendTokenThunk}

export const selectLogin = (state: AppStoreType) => state.login
