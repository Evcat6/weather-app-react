import React, { useState} from 'react';
import axios from 'axios';
import TopPart from './components/TopPart';
import SearchBar from './components/SearchBar';


function App() {
  const [data, setData]  = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4fa43f69310e43840140da69bd5bd09c`

  const searchLocation = (event) => {
    if( event.key === "Enter") {
      axios.get(url).then((response) => {
      setData(response.data)  
      console.log(response.data)
    })
    setLocation('')
    }  
  }

  return (
    <div className="app">
      <SearchBar location={location} setLocation={setLocation} searchLocation={searchLocation}/>
      <div className='container'>
          <TopPart data={data}/>
      </div>
    </div>
  );
}

export default App;
