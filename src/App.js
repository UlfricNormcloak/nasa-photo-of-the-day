import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index';
import axios from 'axios';
import Title from './Title'
import ImageOfTheDay from './ImageOfTheDay'

function App() {

const [apodData, setApodData] = useState({})//initial slice of state
const [error, setError] = useState(null)

useEffect(() => {
  axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)//external server request
    .then(res => {
      console.log(res.data)
      setApodData(res.data);
    })
    .catch(err => {
      console.error(err);
      setError("Sorry, try again soon!");
    })
}, [])


  return (
    <div className="App">
      <p>
        <Title title={apodData.title}/>
        <ImageOfTheDay image={apodData.hdurl}/>
        {/* <Date />
        <Explanation />
        <Copyright /> */}
      </p>
    </div>
  );
}

export default App;
