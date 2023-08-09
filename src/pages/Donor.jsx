import React from 'react'
import { Summary,Graphs,DonorProposals } from '../components/DonorComponents'

const Donor = () => {
  return (
    <main className='container-fluid'>
      <div className='m-4'>
        <h3>Welcome Back,</h3>
        <h5>Daniel</h5>
        <small>Preview your summary</small>
      </div>
      <Summary />
      <DonorProposals propos={[1,2,3,4,5]}/>
      <Graphs />
    </main>
  )
}

export default Donor