import React, { useContext, useReducer, useState } from 'react'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null)

  return (
    <AppContext.Provider
      value={{
        userToken,
        setUserToken,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// custom hook
const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }

