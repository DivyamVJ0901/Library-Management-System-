import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AddBook from './components/AddBooks'
import ListBooks from './components/ListBooks'
import BorrowBook from './components/BorrowBook'
import ReturnBook from './components/ReturnBook'
import Login from './pages/login'
import Signup from './pages/signup'
import { AuthContext } from './context/authContext'

function App () {
  const { isAuthenticated, logout } = useContext(AuthContext)

  return (
      <div className='p-4 bg-gray-100 min-h-screen'>
        {/* Navbar */}
        <nav className='flex justify-between items-center bg-blue-500 p-4 rounded-lg shadow-lg text-white'>
          <div className='flex space-x-6'>
            <Link
              to='/add-book'
              className='hover:text-gray-300 transition duration-300'
            >
              Add Book
            </Link>
            <Link
              to='/list-books'
              className='hover:text-gray-300 transition duration-300'
            >
              List Books
            </Link>
            <Link
              to='/borrow'
              className='hover:text-gray-300 transition duration-300'
            >
              Borrow Book
            </Link>
            <Link
              to='/return'
              className='hover:text-gray-300 transition duration-300'
            >
              Return Book
            </Link>
          </div>
          <div className='flex space-x-4'>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className='bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to='/login'
                  className='bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition duration-300'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300'
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Routes */}
        <div className='mt-10'>
          <Routes>
            <Route path='/add-book' element={<AddBook />} />
            <Route path='/list-books' element={<ListBooks />} />
            <Route path='/borrow' element={<BorrowBook />} />
            <Route path='/return' element={<ReturnBook />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </div>
  )
}

export default App
