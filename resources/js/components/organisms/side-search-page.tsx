import React from 'react'
import Quotes from '../atoms/quotes'

const SideSearchPage = () => {
  return (
    <div className="flex flex-col gap-2 w-1/3 ">
        <div className='w-full bg-blue-100 h-10 rounded-md'><h1>Side Search</h1></div>
        <div className='w-full bg-blue-100 h-10 rounded-md'><h1>Side Search</h1></div>
        <Quotes/>
    </div>
  )
}

export default SideSearchPage