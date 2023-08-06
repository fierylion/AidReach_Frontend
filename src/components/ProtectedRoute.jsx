import React from 'react'
import { useGlobalContext } from '../context'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
  const stored_token = localStorage.getItem('dufa_token')
  const { setUserToken } = useGlobalContext()
  if (stored_token) {
    setUserToken(stored_token)
    return children
  }
  return <Navigate to='/login' replace={true} />
}
export default ProtectedRoute
