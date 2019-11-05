import React from 'react'
import Weather from './Weather'

const Languages = ({language}) => {
    return <li>{language.name}</li>
}

const Country = ({country}) => {
    const displayLanguages = () => country.languages.map(language => <Languages language={language} key={language.name} />)
    return (
    <div>
        <h2>{country.name}</h2>
        capital: {country.capital} <br />
        population: {country.population}
        <h3>languages</h3>
        <ul>{displayLanguages()}</ul> <br />
        <img src={country.flag} height='100' alt='' />
        <Weather country={country} />
    </div>
    )
}

const RenderComponent = ({countries, filter, handleFilterChange}) => {
    const CountryList = (props) => {
        return <li>{props.name} <button value={props.name} onClick={handleFilterChange}>show</button></li>
    }

    const countAmounts = () => {
        const filtered = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase())) 
        if (filtered.length > 10) return (
            <div>Too many matches, specify another filter</div>
        ); else if (filtered.length === 1) return (
            <Country country={filtered[0]} />
            )
        else return (
            displayCountries()
        )
    }

    const displayCountries = () => countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase())).map(country =>
            <CountryList name={country.name} key={country.numericCode} />)

    return (
        <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>
            {countAmounts()}
        </ul>
    )
}

export default RenderComponent