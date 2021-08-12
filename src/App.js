import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index';
import axios from 'axios';

function App() {

const [apodData, setApodData] = useState({})//initial slice of state
const [error, setError] = useState(null)

useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)//external server request
    .then(res => {
      console.log(res)
      setApodData(res.data);
    })
    .catch(err => {
      console.error(error);
      setError("Sorry, try again soon!");
    })
}, [])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
