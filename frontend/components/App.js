import React, {useState, useEffect } from 'react';
import axios from 'axios';


const month = Math.floor(Math.random() * 12)
const day = Math.floor(Math.random() * 28)
const Akey = 'eLK4saZKxM8hct76YbR0hNscxLLn7WWkQArWUea2' 
const web = `https://api.nasa.gov/planetary/apod?api_key=${Akey}`

function Card({title, text, url, date}) {
  return (

    <div className="APOD">
        <h2 className="pTitle">{title}</h2>
        <p>Captured on {date}</p>
        <img className="photo" src={url} />
        <p className="descr">{text}</p>
    </div>
    )
}

function App() {
  const [apod, setApod] = useState()
  const [data, setData] = useState()


  useEffect(() => {
    
    axios.get(web)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(error => {
        console.error('Error... fetching data', error);
      })
  }, [])
    if (!apod) return 'Fetching photo of the day...'
  return (
    
    <section>
      <Card
      title={apod.title}
      text = {apod.explanation}
      url = {apod.url}
      date = {apod.date}
      />
    </section>
  )
}

export default App
