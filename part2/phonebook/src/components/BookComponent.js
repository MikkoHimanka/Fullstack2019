import React from 'react'

const Person = (props) => {
    return <>{props.name} {props.number}</>
}

const BookComponent = ({persons, filter, removePerson}) => {
    const displayPeople = () => persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())).map(person => 
        <li key={person.name}><Person name={person.name} number={person.number} /> <button name={person.name} id={person.id} onClick={removePerson}>delete</button></li>
      )

    return (
        <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>
            {displayPeople()} 
        </ul>
    )
}

export default BookComponent