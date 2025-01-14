import React, {useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';




const month = Math.floor(Math.random() * 12)
const day = Math.floor(Math.random() * 28)
const Akey = 'eLK4saZKxM8hct76YbR0hNscxLLn7WWkQArWUea2' 
const web = `https://api.nasa.gov/planetary/apod?api_key=${Akey}`

const StyledTitle = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0%;
  color: #93005a;
  
`

const StyledP = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-bottom: 3%;

`

const StyledPhoto = styled.img`
  border-top: 2px solid white;
  padding: 0%;
  width: 600px;
  height: 500px;
  float: none;
  margin: auto;
  border: 5px solid white;
  border-image: fill;
  margin-bottom: 2rem;
  
  
`


function Card({title, text, url, date}) {
  return (

    <div className="APOD">
        <StyledTitle className="pTitle">{title}</StyledTitle>
        <StyledP>Captured on {date}</StyledP>
        <StyledPhoto className="photo" src={url} />
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
