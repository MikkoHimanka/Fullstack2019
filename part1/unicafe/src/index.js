import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statblock = ({good, neutral, bad, amounts, average, positive}) => {
  if (amounts !== 0) {
    return (
    <table><tbody>
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      <Statistics text='all' value={amounts} />
      <Statistics text='average' value={average} />
      <Statistics text='positive' value={positive} />
    </tbody></table>
    )} else {
      return (
        <p>No feedback given</p>
      )
    }
}
const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    let amounts = good + neutral + bad
    let average = 0
    if (amounts !== 0) average = (good-bad)/amounts
    let positive = good/amounts*100 +' %'

    return (
        <>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />
        <h1>statistics</h1>
        <Statblock good={good} neutral={neutral} bad={bad} amounts={amounts} average={average} positive={positive} />
        </>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)