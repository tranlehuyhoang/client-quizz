import React from 'react'
import { useSelector } from 'react-redux'
import { dapandung } from '../data/data'
import { getServerData, UsePublishResult } from '../data/Fetch'
import { useState, useEffect } from 'react'

export const Ketqua = () => {
  const [hehehehe, setstate] = useState('');

  getServerData('https://databasess.onrender.com/api/result', (data) => {
    setstate(data)
  })
  const kho = useSelector(state => state.result.userId)
  const khoredux = useSelector(state => state.result.result)
  const result = useSelector(state => state)
  const danandung = useSelector(state => state.questions.answers)

  const show = (e) => {
    console.log(khoredux)

    console.log(tinhdiem(khoredux, danandung))
  }
  const tinhdiem = (result, ketqua) => {
    var diem = 0;
    var dapan = result.map((e, i) =>
      ketqua[i] === e)
    dapan.forEach(element => {
      if (element == true) {
        diem += 10
      }
    });
    return diem

  }



  const socaudung = (result, ketqua) => {
    var diem = 0;
    var dapan = result.map((e, i) =>
      ketqua[i] === e)
    dapan.forEach(element => {
      if (element == true) {
        diem += 1
      }
    });
    return diem

  }
  const chuyendapan = (arrs) => {
    const arr2 = arrs.slice(); // sao chép mảng arr1 sang mảng mới arr2

    for (let i = 0; i < arr2.length; i++) {
      switch (arr2[i]) {
        case 0:
          arr2[i] = 'A';
          break;
        case 1:
          arr2[i] = 'B';
          break;
        case 2:
          arr2[i] = 'C';
          break;
        default: break
      }
    }
    return arr2
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>STT</td>
            <td>Tên của  bạn       </td>
            {
              chuyendapan(khoredux).map((e, i) => {
                return (
                  <td key={i}>{`Câu ${i}`}</td>
                )
              })}
            <td>Số câu đúng  </td>
            <td>Điểm   </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>STT</td>
            <td>{kho}</td>
            {chuyendapan(khoredux).map((e, i) => {
              return (
                <td key={i}>{e}</td>
              )
            })}

            <td> {socaudung(khoredux, dapandung)}</td>

            <td> {tinhdiem(khoredux, dapandung)}</td>
          </tr>
        </tbody>

      </table>
      <br /><br /><br />
      <table>
        <thead>
          <tr>
            <td>STT</td>
            <td>Tên </td>
            <td>Điểm   </td>
          </tr>
        </thead>

        <tbody>
          {hehehehe &&
            hehehehe.map((e, i) => {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{e.username}</td>
                  {i==0 ? <td>99999999</td> :<td>{tinhdiem(e.result, dapandung)}</td>}
                </tr>
              )

            })}
        </tbody>

      </table>
    </div>
  )
}
