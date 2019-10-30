import React from 'react'

const Course = ({content}) => {
    const contents = () =>
      content.parts.map(cont =>
        <Part
          part={cont.name}
          exercises={cont.exercises}
          key={cont.id}
        />
      )
  
      return (
          <>
              <h2>{content.name}</h2>
              {contents()}
              <Total parts={content.parts} />
          </>
      )
  }
  
  const Part = (props) => {
      return <p>{props.part} {props.exercises}</p>
  }
  
  const Total = ({parts}) => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises
      
      return <p><b>total of {parts.reduce(reducer, 0)} exercises</b></p>
  }
  

export default Course