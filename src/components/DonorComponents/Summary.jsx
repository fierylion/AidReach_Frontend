import React from 'react'

const Summary = () => {
  return (
    <section>
      <div className='row'>
        <SingleSummary name={'Amount Donated'} amount={'100000 f'}/>
        <SingleSummary name={'Level'} amount={'5'}/>
        <SingleSummary name={'Votes'} amount={120}/>
        <SingleSummary name={'Impact'} amount={5}/>
       
      </div>
    </section>
  )
}
const SingleSummary =({name, amount})=>{
 return (
   <div className='col-sm-6  '>
     <div className='m-5 text-center border h-75 w-75 shadow rounded p-5'>
       <h5 className='text-capitalize'>{name}</h5>
       <h2 className='text-center'>{amount}</h2>
     </div>
   </div>
 )
}

export default Summary