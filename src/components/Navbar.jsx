import React from 'react'
import logo from '../assets/log.png'
const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Logo
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapsibleNavbar'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Link
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Link
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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