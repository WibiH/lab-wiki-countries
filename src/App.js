import './App.css';
import { useState } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesFromJSON from './countries.json';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([countriesFromJSON]);
  console.log(countriesFromJSON);
  return (
    <div>
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
