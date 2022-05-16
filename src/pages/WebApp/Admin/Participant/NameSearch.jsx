import React from 'react'

const NameSearch = ({ filter, setFilter }) => {
  return (
    <div className='search-cont'>
        Search: 
        <input value={filter || ''}
               type="text" 
               onChange={e => setFilter(e.target.value)}
               className="name-search" />
    </div>
  )
}

export default NameSearch