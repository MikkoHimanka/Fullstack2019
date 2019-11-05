import React from 'react'

const FilterComponent = ({filter, handleFilterChange}) => {
    return (
        <div>find countries <input value={filter} onChange={handleFilterChange} /></div>
    )
}

export default FilterComponent