import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesFromJSON from './countries.json';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <CountriesList countriesList={countriesFromJSON} />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

/*
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
*/

export default App;
