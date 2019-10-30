import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts:[
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ] 
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses input={courses} />
    </div>
  )
}

const Courses = ({input}) => {
  const courses = () => input.map(cont => <Content key={cont.id} content={cont} />)

  return  (
    <>
      {courses()}
    </>
  )

  // return (
  //   <>
  //   <Header course={courses.name} />
  //   <Content content={courses.parts} />
  //   <Total parts={courses.parts} />
  //   </>
  //   )
}

const Content = ({content}) => {
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

ReactDOM.render(<App />, document.getElementById('root'))