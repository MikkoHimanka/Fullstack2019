import React from 'react'

const Person = (props) => {
    return <li>{props.name} {props.number}</li>
}

const BookComponent = ({persons, filter}) => {
    const displayPeople = () => persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())).map(person => 
        <Person name={person.name} key={person.name} number={person.number} />
      )

    return (
        <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>
            {displayPeople()}
        </ul>
    )
}

export default BookComponent