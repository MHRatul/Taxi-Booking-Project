'use client'

import React, { useEffect, useState } from 'react';

function AutocompleteAddress() {

  const [source,setSource]=useState<any>()
  const [addressList, setAddressList]=useState<any>([]);


  useEffect(()=>{
    const delayDebounceFn = setTimeout(()=>{
      getAddressList()
    },1000)

    return ()=> clearTimeout(delayDebounceFn)
  },[source]);

  const getAddressList=async()=>{
    const res= await fetch('/api/search-address?q='+source,{
        headers:{
          "Content-Type": "application/json",
        },
    });

    const result=await res.json();
    setAddressList(result);
  }
  return (
    
        <div className='mt-5'>
          <div>
            <label className='text-gray-600'>Where From?</label>
            <input type='text' 
            className='w-full p-2 border border-gray-300 
            outline-none rounded-md
            focus:border-yellow-300'
            value={source}
            onChange={(e)=>setSource(e.target.value)}
            />
            
            
            {addressList?.suggestions? (
            <div>
            {addressList?.suggestions.map((item:any, index:number)=>{
              <h2 >{item.full_address}</h2>
            })}
            </div>):null}
        </div>
        <div className='mt-3'>
            <label className='text-gray-600'>Where To?</label>
            <input type='text' 
            className='w-full p-2 border border-gray-300 
            outline-none rounded-md
            focus:border-blue-300'/>
        </div>
    </div>
  )
}

export default AutocompleteAddress