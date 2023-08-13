import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const SingleGraph = ({ type, data }) => {
  console.log(data)
  const [timePeriod, setTimePeriod] = useState('week')
  const week =data[0]
  const month = data[1]
  const year = data[2]
 

  const determineTimeFormat = () => {
    switch (timePeriod) {
      case 'week':
        return week
      case 'month':
        return month
      case 'year':
        return year
      default:
        return week
    }
  }

  const options = {
    title: {
  
      text: `${type === 'votes' ? 'Votes' : 'Donations'} Over Time`,
      align: 'left',
      style: {
        fontSize: '13px',
        color: '#9915f7',
        marginRight: '20px',
      },
    },
    stroke: {
      curve: 'smooth',
    },
    
    chart: {
      id: `${type}-chart`,
      animation: {
        speed: 1300,
      },
      background: 'tranparent',
    },

    axisBorder: {
      color: 'transparent', // Set the axis border color to transparent
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
      },
      tooltip: {
        x: {
          format: 'MMM dd HH:mm',
        },
      },
    },
  }

  const series = [
    {
      name: type === 'votes' ? 'Votes' : 'Donations',
      data: determineTimeFormat(),
    },
  ]

  return (
  <>
     
      <Chart options={options} series={series} type='line' height={400} />
      <div className='ms-2'>
        <button
          className={`btn btn-sm mx-2 ${
            timePeriod === 'week' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setTimePeriod('week')}
        >
          Week
        </button>
        <button
          className={`btn btn-sm mx-2 ${
            timePeriod === 'month' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setTimePeriod('month')}
        >
          Month
        </button>
        <button
          className={`btn btn-sm mx-2 ${
            timePeriod === 'year' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setTimePeriod('year')}
        >
          Year
        </button>
      </div>
    </>
  )
}

export default SingleGraph
