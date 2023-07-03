import Cookies from 'js-cookie'
import '../css/Admin.css'
import React from 'react'
import axios from "axios"


export const SignIn = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const changeEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }


    const signIn = async() => {
        await axios.post("http://localhost:5000/api/user/login", {
            email: email, 
            password: password
        }).then((res) => {
            Cookies.set("token", res.data.token)
        })
    } 
    return (
        <>
        <div className='firstBlock'>
            <p className="SignUpText">Авторизация</p>
            
            <div class="form__group">
                <input type="text" class="form__input" id="name" placeholder="Email" required="" onChange={changeEmail}/>
                <label for="name" class="form__label">Email</label>
            </div>
            <div class="form__group">
                <input type="text" class="form__input" id="name" placeholder="Password" required="" onChange={changePassword}/>
                <label for="name" class="form__label">Password</label>
            </div>

            
                <button href="#" class="button" onClick={signIn}>
                    Войти
                </button>
            

        </div>
        </>
    ) 
}
    
