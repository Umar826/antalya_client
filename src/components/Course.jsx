import '../css/Course.css'
import React from 'react'
import axios from 'axios'
const Course = () => {
    const [courses, setCourses] = React.useState([])
    React.useEffect(() => {
        axios.get("http://localhost:5000/api/course").then(
            (res) => {
                setCourses(res.data)
            }
        )
    }, [courses])
    return (
    <>
    <div className='containerCourse'>
        <p className='actual'>Актуальные Курсы по отношению к рублю:</p>
    </div>
     <div className='containerCourse'>
        {courses && courses.map(course => (
            <div className='CourseBlock'>
                <p className='Wallet'>{course.name}:</p>
                <p className='number'>{course.price}</p>
            </div>
        ))}
     </div>
     
    </>
    )
}

export {Course}