// import {useEffect} from 'react';
// Install npm-react-router
import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Animals from './Components/Animals/Animals';
import AnimalDetails from './Components/Animal/AnimalDetails';
import EditAnimalDetails from './Components/Animal/EditAnimalDetails';
import SiteHeader from './Components/Partials/SiteHeader';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Auth from './Components/Auth/Auth';
import Guest from './Components/Auth/Guest';

// npm install bootstrap & inert cdn link
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // This fetchAPI call transferred to Animals.js as we only need the data there
  // useEffect(() => {
  //   fetch('http://localhost:8000/api/v1/animals')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(jsonData => {
  //       console.log(jsonData)
  //     })
  // }, [])
  return (
    <div className="App">
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Animals />} />
        <Route path="/animals/:animalId" element={<AnimalDetails />} />
        <Route path="/animals/:animalId/edit" element={<Auth component={EditAnimalDetails} />} />
        <Route path="/register" element={<Guest component={Register} />} />
        <Route path="/login" element={<Guest component={Login} />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;