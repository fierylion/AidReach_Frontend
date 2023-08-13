import React from 'react'
import inviteImage from '../../assets/inviteImage.png'
import { Zoom } from 'react-awesome-reveal'
const Invite = () => {
  return (
    <section className=''>
      <Zoom>
        <div className='d-flex flex-nowrap justify-content-between '>
          <img src={inviteImage} alt='invite' className='w-50 me-3 d-block' />
          <div className='align-self-center w-50 '>
            <h1 className='m-2 '>Invite your friends</h1>
            <p className='m-2 text-muted small_text '>
              and help the world together
            </p>
            <button className='btn m-2 btn-outline-success'>Invite</button>
          </div>
        </div>
      </Zoom>
    </section>
  )
}

export default Invite