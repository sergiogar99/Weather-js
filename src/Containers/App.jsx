import React, { useState,Component } from 'react';
import './App.css';
import City from '../Components/City'

function App(){

  const [input,setInput] = useState("");

    return (
      <div className="App">
        <div className='Title'>
          <h1>Weather App</h1>
        </div> 

       <div className="Body">

          <input
          id="ov"
          value={input}
          onChange={e =>
            setInput(e.target.value)
          }
          ></input>
          <City input = {input}/>
       </div>


      </div>
    );
  
}

export default App;
