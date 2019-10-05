import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

function UpdateVote (votes, index) {
  const newVotes = [...votes]
  newVotes[index] += 1
  return newVotes
}

function checkMostVotes (votes) {
  let x = 0
  votes.forEach(element => {
    if (element > x) x = element
  })
  return votes.indexOf(x)
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat))
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button text='vote' onClick={() => setVote(UpdateVote(vote, selected))} />
      <Button text='next anecdote' onClick={() => setSelected(Math.floor(Math.random() * 6))} />
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[checkMostVotes(vote)]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)