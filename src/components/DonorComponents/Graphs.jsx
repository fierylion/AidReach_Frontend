import React from 'react'
import SingleGraph from './SingleGraph' // Make sure to provide the correct path

const Graphs = () => {
  return (
    <section className='m-5'>
      <h2 className='text-center my-4'>Contribution Graphs</h2>
      <div className='row'>
        <SingleGraph type='donations' />
        <SingleGraph type='votes' />
      </div>
    </section>
  )
}

export default Graphs
