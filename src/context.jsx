import React, { useContext, useReducer, useState, useEffect } from 'react'
import Web3 from 'web3'
import abi from '../abi.json'
import address from '../address'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  


  const [donorData, setDonorData] = useState(JSON.parse(localStorage.getItem('aidreach_donor')))
  const [ngoData, setNgoData] = useState(JSON.parse(localStorage.getItem('aidreach_ngo')))
  const divideToThree = (noEle, arr) => {
    let sta = 0
    let en = noEle
    let result = []
    while (sta < arr.length) {
      result.push(arr.slice(sta, en))
      sta = en
      en += noEle
    }
    return result
  }
  function formatDate(dateString) {
    if (!dateString) return null
    const now = new Date()
    const date = new Date(dateString)

    // Calculate the time difference
    const diff = Math.abs(now - date)

    const minute = 60 * 1000
    const hour = 60 * minute
    const day = 24 * hour
    const month = 30 * day
    const year = 365 * day

    if (diff < minute) {
      return 'just now'
    } else if (diff < hour) {
      const minutes = Math.floor(diff / minute)
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    } else if (diff < day) {
      const hours = Math.floor(diff / hour)
      return `${hours} hour${hours > 1 ? 's' : ''} ago`
    } else if (diff < month) {
      const days = Math.floor(diff / day)
      return `${days} day${days > 1 ? 's' : ''} ago`
    } else if (diff < year) {
      const months = Math.floor(diff / month)
      return `${months} month${months > 1 ? 's' : ''} ago`
    } else {
      const years = Math.floor(diff / year)
      return `${years} year${years > 1 ? 's' : ''} ago`
    }
  }
  //web3
  const [web3Instance, setWeb3]=useState(null)
  const [accounts, setAccounts] = useState(null)
  const [contractInstance, setContractInstance] = useState(null)
  return (
    <AppContext.Provider
      value={{
       donorData,
       ngoData,
       setDonorData,
       setNgoData,
       divideToThree,
       formatDate,
       setWeb3,
       web3Instance,
       setAccounts,
       accounts,
       contractInstance,
       setContractInstance

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

