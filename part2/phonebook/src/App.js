import React, { useState, useEffect } from 'react'
import AddNameComponent from './components/AddNameComponent'
import FilterComponent from './components/FilterComponent'
import BookComponent from './components/BookComponent'
import {Notification, ErrorNotification} from './components/Notification'
import nameService from './services/names'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ error, setError ] = useState(null)

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

    const displayNotification = () => {
      setMessage(`Added ${newName}`)
      setTimeout(() => {
          setMessage(null)
        }, 3000)
    }

    const alreadyThere = persons.filter(person => person.name === newName)
    if (personObject.name !== '' && alreadyThere.length === 0 && personObject.number !== ''){
      nameService
        .create(personObject)
        .then(returnedName => {
          setPersons(persons.concat(returnedName))
        })
      displayNotification()
    } else if (alreadyThere.length !== 0) { 
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        nameService
          .update(alreadyThere[0].id, personObject)
          .then(returnedName => {
            setPersons(persons.map(person => person.id !== alreadyThere[0].id ? person : returnedName))
            displayNotification()
          })
          .catch(error => {
            setError(`Information of ${newName} has already been removed from server`)
          })
      }
    }

    setNewName('')
    setNewNumber('')
  }

  const removePerson = (event) => {
    if (window.confirm(`Delete ${event.target.name}?`)) {
    nameService
      .remove(event.target.id)
      .then(setPersons(persons.filter(person => person.id !== event.target.id)))
    }
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterComponent filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <Notification message={message} />
      <ErrorNotification message={error} />
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