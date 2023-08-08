import React from 'react'
import { Section1, Section2, Section3, Section4, Section5, Section6, Section7 } from '../components/HomePageSection'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

import imageCarousel from '../components/HomePageSection/imageCarousel'
import logo from '../assets/log.png'
const Homepage = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 imageCarousel={imageCarousel} />
      <Section4 />
      <Section5 />
      <Section6 propos={[1, 2, 3, 4, 5, 6]} />
      <Section7 />
      <footer>
        <div className='container-fluid bg-dark text-light'>
          <div className='row'>
            <div className='col-6 text-center'>
              <h5 className='my-2'>Managed By</h5>
              <div className='m-4'>
                <img src={logo} alt='logo' className='logo ' />
                <h3 className='text-center ms-3 d-inline-block'>Aid Reach</h3>
              </div>
              <div className='d-flex flex-row justify-content-around '>
                <BsFacebook className='footer_icons' />
                <AiFillTwitterCircle className='footer_icons' />
                <AiFillGithub className='footer_icons' />
                <AiFillInstagram className='footer_icons' />
              </div>
            </div>
            <div className='col-6'>
              <h5 className='my-2'>Links</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='#sect1' className='footer_links'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#sect4' className='footer_links'>
                    Impact
                  </a>
                </li>
                <li>
                  <a href='#sect2' className='footer_links'>
                    How it works
                  </a>
                </li>
                <li>
                  <a href='#sect5' className='footer_links'>
                    Who are we
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Homepage