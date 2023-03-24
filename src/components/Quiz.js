import React from 'react'
import { Question } from './Question'
import * as Action from '../redux/cauhoi'
import * as Actions from '../redux/ketqua'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ussPublishResult } from '../data/Fetch.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getdata } from '../data/data'

export const Quiz = () => {
    const kho = useSelector(state => state.result.userId)
    const dispatch = useDispatch();
    const [dapan, setdapan] = useState(undefined);

    const khoredux = useSelector(state => state.result.result)
    const danandung = useSelector(state => state.questions.answers)
    const { queue, trace } = useSelector(state => state.questions)
    const next = () => {
        if (khoredux.length < queue.length) {

            dispatch(Actions.guiketqua(dapan))
        }


        dispatch(Action.cautiep())

        setdapan(undefined)

    }
    const prev = () => {
        dispatch(Action.cautruoc())
    }
    const hehe = () => {
        ussPublishResult({
            result: khoredux,
            username: kho,
        });
    }
    const luudapan = async (e) => {

        await setdapan(e)

    }

    return (
        <div>
            <h2>Quizz game</h2>
            <Question luudapan={luudapan} />
            <div>
                {trace > 0 ? <button onClick={prev}>trở về</button> : <div></div>}
                {trace < queue.length ? <button onClick={next}>tiếp tục</button> : <div></div>}
                <button onClick={
                    hehe
                } > <Link to={'/result'}>Xem kết quả </Link></button>
            </div>
        </div>
    )
}
