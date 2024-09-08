import React from 'react'
import {useState} from 'react'

const SimpleInputPage = () => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    return(
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'> 
                <input
                type="text"
                placeholder="Type something"
                value={text}
                onChange={handleChange}
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <p className="mt-4">Input Value: {text}</p>
            </div>
        </div>
    )
}

export default SimpleInputPage