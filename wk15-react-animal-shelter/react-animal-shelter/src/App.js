// import {useEffect} from 'react';
// Install npm-react-router
import { Routes, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Animals from './Components/Animals/Animals';
import Animal from './Components/Animal/Animal';
// npm install bootstrap & inert cdn link
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <h1>Welcome to React Router!</h1>

      <Routes>
        <Route path="/" element={<Animals/>} />
        <Route path="/123" element={<Animal/>} />
        <Route path="/321" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
