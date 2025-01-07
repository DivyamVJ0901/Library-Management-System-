import React, { useState } from 'react'
import axios from 'axios'

const ReturnBook = () => {
  const [bookId, setBookId] = useState('')
  const [userId, setUserId] = useState('')
  const [message, setMessage] = useState('')

  const handleReturn = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8000/transactions/return',
        { bookId, userId }
      )
      setMessage('Book returned successfully!')
    } catch (error) {
      setMessage('Error returning book')
    }
  }

  return (
    <div className='max-w-lg mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Return Book</h2>
      <form onSubmit={handleReturn} className='space-y-4'>
        <input
          type='text'
          placeholder='Book ID'
          value={bookId}
          onChange={e => setBookId(e.target.value)}
          className='block w-full border border-gray-300 rounded-md p-2'
        />
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={e => setUserId(e.target.value)}
          className='block w-full border border-gray-300 rounded-md p-2'
        />
        <button
          type='submit'
          className='bg-yellow-500 text-white px-4 py-2 rounded-md'
        >
          Return Book
        </button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
    </div>
  )
}

export default ReturnBook
