const { createSlice } = require("@reduxjs/toolkit");

const hcsSlice = createSlice({
    name: 'hcs',
    initialState: [],
    reducers: {
        setHcs(state, action) {
            const { hcs, token } = action.payload
            localStorage.token = token
            state.push(...hcs)
        },
        updateHc(state, action) {
            const { hc } = action.payload
            let toUpdateInd = state.findIndex(hlthctr => hlthctr.id === hc.id)
            state.splice(toUpdateInd, 1, hc)
        }
    }
})

export const { setHcs, updateHc } = hcsSlice.actions
export default hcsSlice.reducer