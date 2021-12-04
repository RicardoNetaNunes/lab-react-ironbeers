import React from 'react';
import Home from './components/Home';
import { Routes, Route } from  "react-router-dom";
import Beers from './components/Beers';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Single from './components/Single';
import Random from './components/Random';
import NewBeer from './components/NewBeer';
import {useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const [beers, setBeers] = useState([])
  const [beersCopy, setBeersCopy] = useState(beers)

  const navigate = useNavigate()

  useEffect(() => {

    const getData = async () => {
       let response  = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
       setBeers(response.data)
   }

   getData()

}, [])

useEffect(() => {
  navigate('/')
}, [beers])


const handleSubmit = async (event) => {
  event.preventDefault()
  let newBeer = {
    name: event.target.name.value,
    tagline: event.target.tagline.value,
    description: event.target.description.value,
    first_brewed: event.target.first_brewed.value,
    brewers_tips: event.target.brewers_tips.value,
    attenuation_level: event.target.attenuation_level.value, 
    contributed_by: event.target.contributed_by.value
  }
  
  let response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
  setBeers([response.data, ...beers])
}


useEffect(() => {
  navigate('/')
}, [beers])



  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers beers={beers} />} />
      <Route path="/beers/:beerId" element={<Single />} />
      <Route path="/random-beer" element={<Random />} />
      <Route path="/new-beer" element={<NewBeer btnSubmit={handleSubmit}/>} />
      </Routes>
    </div>
  );
}

export default App;
