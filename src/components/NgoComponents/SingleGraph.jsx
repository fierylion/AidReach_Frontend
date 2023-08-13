import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const SingleGraph = ({ type, chartData }) => {
  

 const options = {
   chart: {
     type: 'pie',
   },
   title: {
     text: type==='votes'? 'Votes Per Proposal':'Proposal Vote Rate', // Add your desired title here
     align: 'center',
     style: {
       fontSize: '15px', // Adjust the font size if needed
       color: '#9915f7', // Adjust the color if needed
     },
   },
   labels:
     type === 'votes'
       ? chartData[1].map((dt, ind) => `prop-${ind}`)
       : chartData[1],
 }
  const series = chartData[0]

  return (
    <div className='col-md-6 p-1 my-3'>
     
      <Chart options={options} series={series}  height={400} type='donut' />
   
    </div>
  )
}

export default SingleGraph
