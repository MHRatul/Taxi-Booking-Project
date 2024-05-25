import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'


function Booking() {
       
   
  return (
    <div className='h-screen p-8 ml-8'>
        <h2 className='text-[20px] font-semibold'>
            Booking
        </h2>
        <div className='border-[1px] p-5 
        rounded-md'>
        <AutocompleteAddress/>
        </div>
        
    </div>
  )

    function newFunction() {
        return window.innerHeight
    }
}

export default Booking