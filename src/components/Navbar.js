import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div>
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={login}
              className="bg-blue-500 px-4 py-2 rounded mr-2"
            >
              Login
            </button>
            <button className="bg-green-500 px-4 py-2 rounded">
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
