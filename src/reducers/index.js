import { combineReducers } from 'redux'
import hcsReducer from '../features/hcs/HcsSlice'

export default combineReducers({
    hcs: hcsReducer
})