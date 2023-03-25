import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import * as Action from '../redux/cauhoi'
import { answers } from './data';
import { dapandung } from './data';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

export const Fetch = () => {
    // const [{ questions, answers }] = 

    // console.log(answers)
    const dispatch = useDispatch();
    const cauhoi = answers
    useEffect(() => {
        async function fetchData() {
            await dispatch(Action.startExamAction({ question: cauhoi, answers: dapandung }))
        }
        fetchData();


    }, [dispatch])

}
export const ussPublishResult = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            if (result !== [] && !username) throw new Error("Couldn't get Result");
            await postServerData("https://databasess.onrender.com/api/result", resultData, data => data)
            
        } catch (error) {
            console.log(error)
        }
    })();
}
export function CheckUserExist({ children }) {
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
export async function getServerData(url, callback) {
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}


/** post server data */
export async function postServerData(url, result, callback) {
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}