import React, {useState, useEffect} from 'react';
import axios from 'axios'
import FilterComponent from './components/FilterComponent'
import RenderComponent from './components/RenderComponent'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
    <FilterComponent filter={filter} handleFilterChange={handleFilterChange} />
    <RenderComponent countries={countries} filter={filter} handleFilterChange={handleFilterChange} />
    </>
  )
}

export default App;
