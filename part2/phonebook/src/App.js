import React, { useState, useEffect } from 'react'
import AddNameComponent from './components/AddNameComponent'
import FilterComponent from './components/FilterComponent'
import BookComponent from './components/BookComponent'
import nameService from './services/names'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    nameService
      .getAll()
      .then(value => setPersons(value))
  }, [])

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
      nameService
        .create(personObject)
        .then(returnedName => {
          setPersons(persons.concat(returnedName))
        })
    } else if (alreadyThere.length !== 0) { 
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (event) => {
    if (window.confirm(`Delete ${event.target.name}?`)) {
    nameService
      .remove(event.target.id)
      .then(nameService.getAll().then(value => setPersons(value)))
    }
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
      <BookComponent persons={persons} filter={filter} removePerson={removePerson} />
    </div>
  )
}

export default App