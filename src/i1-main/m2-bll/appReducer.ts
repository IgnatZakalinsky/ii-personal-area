import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppStoreType} from './store'
import {LoginAPI} from "../../i2-features/f1-login/l3-dal/LoginAPI";

// < {answer}, {params}, {rejectValue {in catch}}>
export const someThunk = createAsyncThunk<{ z: number }, { x: number }, { rejectValue: { y: number } }>(
    'app/someThunk',
    async (payload, thunkAPI
    ) => {
        // thunkAPI.getState() as AppStoreType
        // thunkAPI.dispatch(setX(payload))

        try {
            const p = await new Promise<{ z: number }>(((res, rej) => {
                if (payload.x < 10) res({z: payload.x})

                rej({z: payload.x})
            }))

            // thunkAPI.dispatch(someThunk.fulfilled({z: 1}, 'reqId', {x: 1}))

            return p
            // return {z: 1}
        } catch (er) {

            console.log('er', {...er}, er)
            return thunkAPI.rejectWithValue({y: payload.x})
        }
    })
export const meThunk = createAsyncThunk<{ error?: string }, void, { rejectValue: void }>(
    'app/meThunk',
    async (payload, thunkAPI
    ) => {
        thunkAPI.dispatch(appActions.setLoading({isLoading: true}))

        try {
            const p = await LoginAPI.me()

            thunkAPI.dispatch(appActions.setVerified({isVerified: true}))

            return p
        } catch (er) {
            const error = er.response ? er.response.data.error : (er.message + ', more details in the console')
            thunkAPI.dispatch(meThunk.fulfilled({error}, 'xzId2'))

            console.log('er', {...er}, er)
            console.log('error:', error)
            return thunkAPI.rejectWithValue()
        }
    }
)

const slice = createSlice({
    name: 'app',
    initialState: {
        isAuth: false,
        error: '',
        isVerified: false,
        x: 1, y: 2, z: 3,
        isLoading: false,
    },
    reducers: {
        setAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
            state.isAuth = action.payload.isAuth
        },
        setVerified: (state, action: PayloadAction<{ isVerified: boolean }>) => {
            state.isAuth = action.payload.isVerified
            state.isVerified = action.payload.isVerified
            state.isLoading = false
        },
        setX: (state, action: PayloadAction<{ x: number }>) => {
            state.x = action.payload.x
        },
        setLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading
            state.error = ''
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(
                someThunk.fulfilled,
                (state, action) => {
                    state.z = action.payload.z
                }
            )
            .addCase(
                meThunk.fulfilled,
                (state, action) => {
                    state.error = action.payload.error || ''
                    state.isLoading = false
                }
            )

    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
export const someThunkRej = someThunk.rejected
export const appThunks = {someThunk, meThunk}

export const selectApp = (state: AppStoreType) => state.app
