import React from "react"
import axios from "axios"
import '../css/Admin.css'

export const EditCourse = ({course, setCoures}) => {
    const [isEdit, setIsEdit] = React.useState(false)
    const [price, setPrice] = React.useState(course.price)

    const changePrice = (e) => {
        setPrice(e.target.value)
    }

    const editCourse = async () =>{
        await axios.patch(`http://localhost:5000/api/course/${course.id}`, {
            price: price
        })
        setCoures([])
        setIsEdit(false)
    }
    return(
        <div className='tryBlock'>
                    <div class="form__group">
                        {isEdit ? (
                            <input className="courseInput" value={price} onChange={changePrice} />
                        ) : (
                            <div className="courseBlock">
                                <span className="courseName">{course.name}:</span>
                                <span className="coursePrice">{course.price}</span>
                            </div>
                        )}
                       
                    </div>
                    {isEdit ? (
                        <button className="courseButton" onClick={editCourse}>Сохранить</button>
                    ) : (
                        <button className="courseButton" onClick={()=>setIsEdit(true)}>Обновить</button>
                    )}
                    
                </div>
    )
}