import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    const [fullName, setFullName] = useState('')
    const [collegeYear, setCollegeYear] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    const isDisabled = !fullName || !collegeYear || !age || !isValidEmail(email) || password.length < 6

    const handleSignUp = (e) => {
        e.preventDefault()
        if(!isDisabled){
            console.log('Full Name:', fullName)
            console.log('College Year:', collegeYear)
            console.log('Age:', age)
            console.log('Email', email)
            console.log('Password:', password)
        } else {
            console.log('Form is not valid')
        }
    }

    const InputField = ({type='text', placeholder, value, onChange, className }) => {
        return (
            <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            />
        )
    }

    const Button = ({type='button', children, onClick, className, disabled}) => {
        return (
            <button
            type={type}
            onClick={onClick}
            className={`py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded ${className}
            ${ disabled ? 'opacity-50 cursor-not-allowed' : '' }`} disabled={disabled}
            >{children}</button>
        )
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
                <h2 className='text-2xl font-bold text-center mb-6'>Sign Up</h2>
                <form onSubmit={handleSignUp} className='space-y-4'>
                    <InputField
                    type='text'
                    placeholder='Full Name'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    />
                    <InputField
                    type='text'
                    placeholder='College Year'
                    value={collegeYear}
                    onChange={(e) => setCollegeYear(e.target.value)}
                    />
                    <InputField 
                    type='number'
                    placeholder='Age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    />
                    <InputField 
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type='submit' disabled={isDisabled} className='w-full'>Sign Up</Button>
                </form>
                <div className='text-center mt-4'>
                    <p className='text-gray-600'>
                        <Link href='/login' className='text-blue-600 hover:underline'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage