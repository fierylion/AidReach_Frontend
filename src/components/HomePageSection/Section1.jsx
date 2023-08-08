import React from 'react'
import charityImage from '../../assets/charit.png'
const Section1 = () => {
  return (
    <>
      <section className='py-5' id='sect1'>
        <div className='d-flex flex-wrap justify-content-between home-headers-text'>
          <div className='text-justify w-50  mx-4'>
            <h3 className='text-justify  lh-base'>
              Empowering Transparent Charity Donations with Web3
            </h3>
            <p className='text-justify my-4 text-wrap w-100'>
              Join us to revolutionize giving, empowering NGOs, and creating a
              better world through blockchain transparency. Vote for change!
            </p>
          </div>
          <img
            src={charityImage}
            alt=''
            className='home-charity-img float-end  img-fluid '
          />
        </div>
      </section>
      
      <section></section>
      <section></section>
    </>
  )
}

export default Section1