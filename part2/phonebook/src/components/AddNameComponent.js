import React from 'react'

const AddNameComponent = ({AddName, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={AddName}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddNameComponent