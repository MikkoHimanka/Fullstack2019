import React, { useState } from 'react'

const Person = (props) => {
    return <li>{props.name}</li>
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const AddName = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName
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
    <Person name={person.name} key={person.name} />
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={AddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
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