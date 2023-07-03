import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout'
import { Homepage } from './pages/Homepage';
import { Nal } from './components/Nal';
import { Course } from './components/Course';
import { Reviews } from './components/Reviews';
import { Panel } from './components/Panel';
import { SignIn } from './components/SignIn';
import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import axios from 'axios';

function App() {
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [arr, setArr] = React.useState([
    {
      name: '',
      price: 0
    }
  ])
  useEffect(() => {
    axios.get('http://localhost:5000/api/course').then(res=>{
      setArr(res.data)
    })
    const token = Cookies.get("token")
    if(typeof token == "string"){
      const user = jwt_decode(token)
      user.role == "ADMIN" ? 
      setIsAdmin(true):
      setIsAdmin(false)
    } 
  }, [])
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage arr={arr} />} />
        <Route path='/nal' element={<Nal />} />
        <Route path='/course' element={<Course />} />
        <Route path='/rev' element={<Reviews />} />
        <Route path='/signin' element={<SignIn />} />
        {isAdmin && (
          <Route path='/Panel' element={<Panel />} />
        )}
      </Route>
    </Routes>
    </>
  );
}

export default App;
