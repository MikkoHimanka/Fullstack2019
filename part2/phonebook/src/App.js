import React, { useState } from 'react'

const Person = (props) => {
    return <li>{props.name} {props.number}</li>
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const AddName = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber
    }
    const alreadyThere = persons.filter(person => person.name === newName)
    if (personObject.name !== '' && alreadyThere.length === 0){
      setPersons(persons.concat(personObject))
    } else if (alreadyThere.length !== 0) { 
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const displayPeople = () => persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person => 
    <Person name={person.name} key={person.name} number={person.number} />
  )
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form></form>
      <div>filter shown with <input value={filter} onChange={handleFilterChange} /></div>
      <h2>add a new</h2>
      <form onSubmit={AddName}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>
        {displayPeople()}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App