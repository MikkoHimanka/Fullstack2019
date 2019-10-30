import React from 'react'
import Course from './components/Course'

const Courses = ({input}) => {
    const courses = () => input.map(cont => <Course key={cont.id} content={cont} />)
  
    return  (
      <>
        {courses()}
      </>
    )
}

const App = ({ courses }) => {
    return (
        <div>
        <h1>Web development curriculum</h1>
        <Courses input={courses} />
        </div>
    )
}



export default App