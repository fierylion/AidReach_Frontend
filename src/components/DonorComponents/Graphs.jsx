import React from 'react'
import SingleGraph from './SingleGraph' // Make sure to provide the correct path
import { Slide } from 'react-awesome-reveal'

const Graphs = () => {
  return (
    <section className='m-5'>
      <div className='row'>
        <div className='col-md-6 p-1 my-3'>
          <Slide>
            <SingleGraph type='donations' />
          </Slide>
        </div>
        <div className='col-md-6 p-1 my-3'>
          <Slide direction='right'>
            <SingleGraph type='votes' />
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default Graphs
