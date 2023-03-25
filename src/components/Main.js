
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/ketqua'
import { useRef } from 'react'
import { useSelector } from 'react-redux'


export const Main = () => {
    const ten = useRef()
    const [state, setstate] = useState(undefined);
    const hehe = useSelector(state => state)
    const dispatch = useDispatch();
    const nhapten = () => {
        dispatch(setUserId(ten.current?.value))
        console.log(ten.current?.value)
        console.log(hehe)

    }
    return (
        <div className='main'>
            <div>nhập tên</div>
            <input type="text" ref={ten} /> <br />
            <Link to={'/client-quizz/quiz'} onClick={nhapten} >Bắt đầu</Link>
        </div>
    )
}
