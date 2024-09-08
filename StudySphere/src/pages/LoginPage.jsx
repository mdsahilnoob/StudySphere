import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    const isDisabled = !isValidEmail(email) || password.length === 0
    
    const handleLogin = (e) => {
        e.preventDefault();
        if(!isDisabled){
            console.log('Email:', email, 'Password:', password)
        }else {
            console.log('Form is not valid')
        }
    }

    const InputField =({ type='text', placeholder, value, onChange, className }) => {
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
    const Button = ({ type='button', children, onClick, className, disabled }) => {
        return (
            <button 
            type={type}
            onClick={onClick}
            className={`py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded ${className}
            ${disabled ? 'opacity-50 cursor-not-allowed' : '' }`} disabled={disabled}>
                {children}
            </button>
        )
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
                {/* <div className='mb-6'>
                    <img src={logo} alt='Logo' className='h-12' />
                </div> */}
                <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
                <form onSubmit={handleLogin} className='space-y-4'>
                    <InputField 
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <InputField
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                    />
                    <Button type='submit' disabled={isDisabled} className='w-full'>Login</Button>
                </form>
                <div className='text-center mt-4'>
                    <p className='text-gray-600'>New User? {' '}
                        <Link to='/login' className='text-blue-600 hover:underline'>Sign up</Link>
                    </p>
                </div>

            </div>

        </div>
    )

}

export default LoginPage