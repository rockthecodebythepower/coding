import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

const AppBar = ({ pages }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleNavigate = (path) => {
    if (path) navigate(path)
  }

  return (
    <>
      <header>
        <h1> React Router Auth 🧪</h1>
      </header>
      <nav>
        {
          pages?.map((page) => (
            <button key={page.label} onClick={() => handleNavigate(page.path)}>
              {page.label}
            </button>
          ))
        }
        {
          !!user && (
            <button key={logout} onClick={logout}>Logout ❌</button>
          )
        }
      </nav>
    </>
  )
}

export default AppBar