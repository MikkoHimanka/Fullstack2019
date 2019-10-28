import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          }
        ]
      }

  return (
    <div>
      <Course course={course} />
    </div>
    // <div>
    //     <Header course={course.name} />  
    //     <Content parts={course.parts} />
    //     <Total parts={course.parts} />
    // </div>
  )
}

const Course = ({course}) => {
  return (
    <>
    <Header course={course.name} />
    <Content content={course.parts} />
    </>
    )
}

const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Content = ({content}) => {
  const contents = () =>
    content.map(cont =>
      <Part
        part={cont.name}
        exercises={cont.exercises}
        key={cont.id}
      />
    )

    return (
        <>
            {contents()}
        </>
    )
}

const Part = (props) => {
    return <p>{props.part} {props.exercises}</p>
}

const Total = (props) => {
    let sum = 0
    props.parts.forEach(value => {
        sum += value.exercises
    });
    return <p>Number of exercises {sum}</p>
}

ReactDOM.render(<App />, document.getElementById('root'))