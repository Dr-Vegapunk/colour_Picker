'use client'
import React, { useState } from 'react'

const ColourPicker = () => {
    const [color, setColor] = useState("#000000");
    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

  return (
    <div className='flex flex-col items-center'>
           <h1 className='font-bold text-2xl mt-4 mb-4'>Colour Picker</h1>
           <p className='font-serif font-semibold p-10 border-2 rounded-xl w-30 h-40 content-center shadow-lg' style={{background: color}}>Selected Color: {color}</p>
          
           <br />
           <p className='font-semibold'>Select a Colour : </p>
           
           <input type="color" value={color} onChange={handleColorChange} className=' w-20 h-10 p-2 bg-slate-300 rounded-lg shadow-lg mt-2 ease-in-out duration-100' />
           

    </div>
  )
}

export default ColourPicker