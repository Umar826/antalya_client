import '../css/Home.css'
import ShieldIcon from '@mui/icons-material/Shield';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import InputName from '../components/InputName';
import InputNumber from '../components/InputNumber';
import InputIban from '../components/InputIban';
import axios from 'axios';
import { colors } from '@mui/material';

const Homepage = ({arr}) => { 
    const [post, setPost] = useState(0)
    const [get, setGet] = useState(0)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [iban, setIban] = useState('')
    const [selectedCourse, setSelectedCourse] = useState(arr[0])
  
    const handleChange = (e) => {
      if (e.target.value < 0) {
        setPost(0)
      } else {
        setPost(e.target.value)
      }
    }
    const submitContact = () => {
      if (name.length < 10) {
        alert('Некорректный ФИО')
      }
      if (!post) {
        alert('Не ввели сколько хотите обменять')
      }
      if (number.length < 5) {
        alert('Некорректный номер телефона')
      }
      if (iban.length < 5) {
        alert('Некорректный ИБАН')
      }
      if (iban.length > 5 && number.length > 5 && post && name.length > 10) {
        axios.post('http://localhost:5000/api/contact', {
          name: name,
          iban: iban,
          course: selectedCourse.name,
          post: post,
          phone: number,
          get: get
        }).then(()=>{
          alert('Заявка на обмен валюты отправлена! Мы свяжемся с вами в течение 15 минут)')
          setPost(0)
          setNumber('')
          setName('')
          setIban('')
        })
      }
    }
    const handleChangeCourse = (item) => {
      setGet(0)
      setPost(0)
      setSelectedCourse(item)
    }
    useEffect(()=>{
      setGet(post / selectedCourse.price)
    }, [post])
    return (
        <>
        <div className='div_status'>
            <ShieldIcon className='orange'/><p className='status'>Вы можете узнать статус вашего заказа <a className='telegram_status' href='https://t.me/AntalyaChanger'>здесь</a></p>
        </div>
        <main>
            <div className='take'>
                <div className='take_1'>
                    <div className='take_flex'>
                        <p className='want_take'>Сколько рублей хотите <span className='take_orange'>поменять?</span></p>
                        <input className='homeInput' type="number" value={post} onChange={handleChange}/>
                    </div>
                  
                </div>

                <div className='take_2'>
                  <div className='take_flex_2'>
                        <p className='want_give want_take'>Что хотите <span className='take_orange'>получить?</span></p>
                        <div className='display_flex_1024'>
                          { arr && arr.map(item => (
                              <button className='courseButtonFix'
                              style={{background: `${selectedCourse.name === item.name ? '#1976d2' : 'none'}`}}
                              onClick={()=>handleChangeCourse(item)} value={item.name}>
                              {item.name}
                              </button>
                          ))} 
                        </div>
                        <input className='homeInput' type="number" value={get} disabled />
                  </div>
                  
                </div>
            </div>

            <div className='pay_main'>
              <p className='pay_head'>Ваши реквизиты</p>
              <div className='pay_main_flex'>
              <div className='pay_block'>
                <InputName name={name} setName={setName} />
                <InputNumber number={number} setNumber={setNumber} />
              </div>
                <div className='pay_block'>
                <InputIban iban={iban} setIban={setIban} />
                <button className='homeChangeButton' onClick={submitContact}>ОБМЕНЯТЬ</button>
                </div>
              </div>
            </div>

        </main>
        </>
    ) 
}

export { Homepage }