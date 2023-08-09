import React from 'react'
import { Summary,Graphs } from '../components/DonorComponents'

const Donor = () => {
  return (
    <main className='container-fluid'>
    <div className='m-4'>
    <h3>Welcome Back,</h3>
    <h5>Daniel</h5>
    <small>Preview your summary</small>

    </div>
    <Summary/>
    <Graphs/>
    </main>
  )
}

export default Donor