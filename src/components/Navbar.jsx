import React from 'react'
import logo from '../assets/log.png'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
import MessageAlerts from './MessageAlerts'
import connectWallet from '../connect'
const Navbar = () => {
  
  const { ngoData, donorData, setWeb3, web3Instance, setContractInstance, setAccounts } = useGlobalContext()
  const logOut = ()=>{
    localStorage.removeItem('aidreach_donor')
    localStorage.removeItem('aidreach_ngo')
    window.location.reload()
  }
  
  return (
    <>
      <nav className='navbar navbar-expand-md back-black pt-3'>
        <div className='container'>
          <div>
            <img src={logo} alt='logo' className='logo ms-3 nav-brand ' />
            <span className='ms-3 fw-bold'>AidReach</span>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapsibleNavbar'
          >
            <span className='navbar-toggler-icon ' />
          </button>
          <div className='collapse navbar-collapse  ' id='collapsibleNavbar'>
            <ul className='navbar-nav ms-auto me-5 ps-3'>
              <li className='nav-item m-2'>
                <a className='nav-link' href='/'>
                  Home
                </a>
              </li>
              {!(ngoData || donorData) && (
                <>
                  <li className='nav-item m-2'>
                    <a className='nav-link' href='/login'>
                      Login
                    </a>
                  </li>
                  <li className='nav-item m-2'>
                    <a className='nav-link' href='/register'>
                      Sign Up
                    </a>
                  </li>
                </>
              )}
              {ngoData && (
                <li className='nav-item m-2'>
                  <a className='nav-link' href='/ngo'>
                    Ngo
                  </a>
                </li>
              )}
              {donorData && (
                <li className='nav-item m-2'>
                  <a className='nav-link' href='/donor'>
                    Donor
                  </a>
                </li>
              )}
              {(donorData || ngoData) &&
              <li className='nav-item m-2'>
                <a className='nav-link' onClick={()=>logOut()}>
                  Logout
                </a>
              </li>}
              <li
                className='nav-item
              m-2'
              >
                {!web3Instance && (
                  <button
                    className='btn bg-dark nav-link rounded border px-3 text-white'
                    onClick={() =>
                      connectWallet(setWeb3, setAccounts, setContractInstance)
                    }
                  >
                    Connect
                  </button>
                )}
                {web3Instance && (
                  <button className='btn btn-success'>Connected</button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container mt-2'>
        {web3Instance && (
          <MessageAlerts msg={'Connected Successfully!'} color={'success'} />
        )}
        {!web3Instance && (
          <MessageAlerts
            msg={'Not Connected to your wallet'}
            color={'warning'}
          />
        )}
      </div>
    </>

    // <nav className='navbar back-black'>
    //   <img src={logo} className='navbar-brand logo' alt="" />
    //   <div className='collapse navbar-collapse' id='navbarContent'>
    //     <div className='navbar-nav'>
    //       <button className='nav-item btn btn-outline-dark my-2 my-sm-0 mr-2 me-4'>
    //         Login
    //       </button>
    //       <button className='nav-item btn btn-outline-dark my-2 my-sm-0 mr-2 me-4'>
    //         Signup
    //       </button>
    //       <button className='nav-item btn back-purple my-2 my-sm-0 mr-2 me-4'>
    //         Connect
    //       </button>
    //     </div>
    //   </div>
    //   <button className='navbar-toggler me-4' type='button' data-toggle='collapse' data-target='#navbarContent'>
    //     <span className='navbar-toggler-icon'></span>
    //   </button>
    // </nav>
  )
}

export default Navbar