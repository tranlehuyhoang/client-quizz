
import React from 'react'
import { answers } from '../data/data'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as Action from '../redux/cauhoi'
import { Fetch } from '../data/Fetch'
import * as Actions from '../redux/ketqua'
export const Question = ({ luudapan }) => {
    Fetch();
    const cauhoi = answers;
    const dispatch = useDispatch();
    const [state, setstate] = useState(undefined);
    const khoredux = useSelector(state => state)
    const { queue, trace } = useSelector(state => state.questions)

    function Select(params) {
        luudapan(params)
        setstate(params)

    }
    const cauhois = khoredux.questions.queue[khoredux.questions.trace];
    if (cauhois) {
        return (
            <div>
                <div >{`Câu${khoredux.questions.trace + 1} :   ${cauhois.question}`}</div>
                <ul key={cauhois.id}>
                    {
                        cauhois.options.map((e, i) => (
                            <div className="radio" key={i}>
                                <input type="radio" id={`q${i}-option`} name={`a${khoredux.questions.trace}`} onChange={() => Select(i)} />
                                <label className='check' htmlFor={`q${i}-option`}>{e} cal</label>
                            </div>

                        ))
                    }
                </ul>

            </div>

        )
    }
}

