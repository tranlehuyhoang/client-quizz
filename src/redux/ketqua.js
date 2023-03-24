import { createSlice } from "@reduxjs/toolkit"

export const ketqua = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        guiketqua: (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction: (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1)
        },
        resetResultAction: () => {
            return {
                userId: null,
                result: []
            }
        }
    }
})

export const { setUserId, guiketqua, resetResultAction, updateResultAction } = ketqua.actions;

export default ketqua.reducer;
