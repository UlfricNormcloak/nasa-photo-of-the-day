import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index';
import axios from 'axios';

function App() {
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
