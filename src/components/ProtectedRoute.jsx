import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import { Navigate } from 'react-router-dom'
import { set } from 'react-hook-form'
const ProtectedRoute = ({ children,type }) => {
  
  
  const { donorData, ngoData, setDonorData, setNgoData } = useGlobalContext()
  const donData = JSON.parse(localStorage.getItem('aidreach_donor'))
  const ngData = JSON.parse(localStorage.getItem('aidreach_ngo'))
  useEffect(() => {
    if (donData) {
      setDonorData(donData)
    }
    if (ngData) {
      setNgoData(ngData)
    }
  }, [])

  if (type==='ngo' && ngData?.type==='ngo') {
    // login user of specific type

    return children
  }
  if(type==='donor' && donData?.type==='donor'){

    return children
  }
  return <Navigate to='/login' replace={true} />
}
export default ProtectedRoute
