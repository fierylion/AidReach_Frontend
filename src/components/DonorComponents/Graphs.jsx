import React, { useState } from 'react'
import SingleGraph from './SingleGraph' // Make sure to provide the correct path
import { Slide } from 'react-awesome-reveal'
import { useGlobalContext } from '../../context'
import { useEffect } from 'react'
import api from '../../api'
import axios from 'axios'
import MessageAlerts from '../MessageAlerts'

const Graphs = () => {
  const { donorData } = useGlobalContext()
  // month week and year in unix milliseconds
  const day = 24 * 60 * 60 *1000
  const week = day * 7
  const month = day * 30
  const year = day * 365
  const urls = [
    `/donor/vote?from=${Date.now() - week}&to=${Date.now()}`,
    `/donor/vote?from=${Date.now() - month}&to=${Date.now()}`,
    `/donor/vote?from=${Date.now() - year}&to=${Date.now()}`,
    `/contribution?from=${Date.now() - week}&to=${Date.now()}`, 
    `/contribution?from=${Date.now() - month}&to=${Date.now()}`,
    `/contribution?from=${Date.now() - year}&to=${Date.now()}`,
  ]
  let donorVotes = [[], [], []];
  let donorDonations = [[], [], []];
  const [loading,setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [donations, setDonations] = useState([[], [], []])
  const [votes, setVotes] = useState([[], [], []])
  useEffect(() => {
    const requests = urls.map((url) =>
      api.get(url, {
        headers: {
          Authorization: 'Bearer ' + donorData.token,
        },
      })
    )
    axios.all(requests).then((responses) => {
      setLoading(false)
      let donations = responses.slice(3).map(
        (response) => {
          const contr = response.data.contributions;
          return contr.map((data)=>({x:data.createdAt, y:data.amount}))
        }
      )
      setDonations(donations)
      let votes = responses.slice(0, 3).map(
        (response) => {
          const votes = response.data.votes;
          return votes.map((data)=>({x:data.createdAt, y:1}))
        }
      )
     setVotes(votes)
      
    }).catch((err)=>{
      setError(err)
      console.log(err)})
  }, [donorData])


  return (
    <section className='m-5'>
      <div>
        {error && (
          <MessageAlerts
            msg={error.response?.data?.msg || error.response?.data?.err}
            color={'danger'}
          />
        )}
        {loading && (
          <MessageAlerts msg={'Fetching your details!!'} color={'warning'} />
        )}
      </div>
      <div className='row'>
        <div className='col-md-6 p-1 my-3'>
          <Slide>
            <SingleGraph type='donations' data={donations} />
          </Slide>
        </div>
        <div className='col-md-6 p-1 my-3'>
          <Slide direction='right'>
            <SingleGraph type='votes' data={votes} />
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default Graphs
