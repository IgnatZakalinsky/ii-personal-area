import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppStoreType} from './store'

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

const slice = createSlice({
    name: 'app',
    initialState: {
        x: 1, y: 2, z: 3,
        isLoading: false,
    },
    reducers: {
        setX: (state, action: PayloadAction<{ x: number }>) => {
            state.x = action.payload.x
        },
        setLoading: (state, action: PayloadAction<{isLoading: boolean}>) => {
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
            .addCase(someThunk.fulfilled, (state, action) => {
                state.z = action.payload.z
            })
        // .addCase() ...

    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
export const someThunkRej = someThunk.rejected
export const appThunks = {someThunk}

export const selectApp = (state: AppStoreType) => state.app
