import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cauhoi from './cauhoi';
// import logger from 'redux-logger'
import ketqua from './ketqua';
const rootReducer = combineReducers(
    {
        questions: cauhoi,
        result: ketqua
    }
)
export default configureStore({
    reducer: rootReducer,

})