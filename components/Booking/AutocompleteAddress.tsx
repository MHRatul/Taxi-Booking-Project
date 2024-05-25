import React from 'react'

function AutocompleteAddress() {
  return (
    <div>
        <div className='mt-5'>
            <label className='text-gray-600'>Where From?</label>
            <input type='text' 
            className='w-full p-2 border border-gray-300 
            outline-none rounded-md
            focus:border-yellow-300'/>
        </div>
        <div className='mt-3'>
            <label className='text-gray-600'>Where To?</label>
            <input type='text' 
            className='w-full p-2 border border-gray-300 
            outline-none rounded-md
            focus:border-yellow-300'/>
        </div>
    </div>
  )
}

export default AutocompleteAddress