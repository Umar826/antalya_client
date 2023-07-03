import '../css/Admin.css'
import React from 'react'
import axios from "axios"
import { EditCourse } from './EditCourse'

const Panel = () => {
    const [courses, setCourses] = React.useState([])
    const [contacts, setContacts] = React.useState([])

    const deleteContact = (id) => {
        axios.delete(`http://localhost:5000/api/contact/${id}`)
    }

    React.useEffect(() => {
        axios.get("http://localhost:5000/api/course").then(
            (res) => {
                setCourses(res.data)
            }
        )
        axios.get("http://localhost:5000/api/contact").then(
            (res) => {
                setContacts(res.data)
            }
        )                        
    }, [])
    return (
    <>
        <div className='PanelBlock'>

            {courses && courses.map(course => (
                <EditCourse  course = {course} setCoures={setCourses}/> 
            ))}
            {contacts && contacts.map(contact => (
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center'}}>
                    <div className='orderBlock'>
                        <div className='display_grid'>
                                <p className='orange'>Контакты:</p><span className='orderText'>{contact.phone}</span>
                                <p className='orange'>ФИО:</p><span className='orderText'>{contact.name}</span>
                        </div>
                        <div className='display_grid'>
                                <p className='orange'>Валюта:</p><span className='orderText'>{contact.course}</span>
                                <p className='orange'>Ибан:</p><span className='orderText'>{contact.iban}</span>
                        </div>
                        <div className='display_grid'>
                                <p className='orange'>Отдаёт:</p><span className='orderText'>{contact.post}</span>
                                <p className='orange'>Получает:</p><span className='orderText'>{contact.get}</span>
                        </div>
                            
                        <button className='orderButton' onClick={() => deleteContact(contact.id)}>Удалить</button>
                        </div>
                    </div>
               
            ))}

        </div>
    </>
    )
}

export { Panel }