import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/auth/login', formData)
      const { token } = response.data
    
      // Store the token in localStorage for authentication
      localStorage.setItem('token', token)

      setMessage('Login successful!')
      navigate('/list-books') // Redirect to the books list page
    } catch (error) {
      setMessage(
        'Error during login: ' + error.response?.data?.message || error.message
      )
    }
  }

  return (
    <div className='max-w-md mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className='block w-full border border-gray-300 rounded-md p-2'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          className='block w-full border border-gray-300 rounded-md p-2'
        />
        <button
          type='submit'
          className='bg-green-500 text-white px-4 py-2 rounded-md w-full'
        >
          Login
        </button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
    </div>
  )
}

export default Login
