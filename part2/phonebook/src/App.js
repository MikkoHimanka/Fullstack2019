import React, { useState } from 'react'
import AddNameComponent from './components/AddNameComponent'
import FilterComponent from './components/FilterComponent'
import BookComponent from './components/BookComponent'

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
  
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterComponent filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <AddNameComponent 
        AddName={AddName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <BookComponent persons={persons} filter={filter} />
    </div>
  )
}

export default App