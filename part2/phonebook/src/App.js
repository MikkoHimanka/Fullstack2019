import React, { useState } from 'react'

const Person = (props) => {
    return <li>{props.name} {props.number}</li>
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
  }

  const displayPeople = () => persons.map(person => 
    <Person name={person.name} key={person.name} number={person.number} />
  )

  return (
    <div>
      <h2>Phonebook</h2>
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