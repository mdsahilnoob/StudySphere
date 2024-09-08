import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function SignupPage(){
    const [fullName, setFullName] = useState('')
    const [collegeYear, setCollegeYear] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log('Full Name:', fullName, 'College Year:', collegeYear, 'Age:', age, 'Email:', email, 'Password:', password)
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            {/* <h1 className='text-4xl font-bold text-blue-500'>Sign Up</h1> */}
            <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
            <h2 className="text-2xl font-semibold text-center mb-4 text-blue-500">Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor='fullName' className='block text-gray-700 font-bold mb-2'>
                            Full Name
                        </label>  
                        <input
                        type='text'
                        id='fullName'
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='collegeYear' className='block text-gray-700 font-bold mb-2'>CollegeYear</label>
                        <input 
                        type='number'
                        id='collegeYear'
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={collegeYear}
                        onChange={(e) => setCollegeYear(e.target.value)}
                        required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='age' className='block text-gray-700 font-bond mb-2'>Age</label>
                        <input 
                        type='number'
                        id='age'
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>Email</label>
                        <input 
                        type='email'
                        id='email'
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-gray-700 font-bond mb-2'>Password</label>
                        <input 
                        type='password'
                        id='password'
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <button type='submit' className='w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-200'>
                        SignUp
                    </button>
                </form>
                <div className='text-center mt-4'>
                    Already a User?
                    <Link to='/login' className='text-blue-500 hover:underline'> Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupPage