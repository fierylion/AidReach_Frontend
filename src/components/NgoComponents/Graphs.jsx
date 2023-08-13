import React from 'react'
import SingleGraph from './SingleGraph' // Make sure to provide the correct path
import MessageAlerts
 from '../MessageAlerts'
import { useGlobalContext } from '../../context'
import useFetch from '../../hooks'

const Graphs = () => {
  let propVotes = [[], []]
  let propRate = [[], []
    
  ]
  const {ngoData} = useGlobalContext()
  const {obtainData, data, isLoading, error} = useFetch()
  React.useEffect(() => {
    obtainData(
      'ngo/vote',
      'get',
      {},
      {
        headers: {
          Authorization: 'Bearer ' + ngoData.token,
        },
      }
    )
  }, [ngoData])
  if(data){
    console.log(data)
    const voteMap = new Map()
    const voteData = data.votes;
    voteData.forEach((vote)=>{
      const prop = vote.proposalId._id
      if(voteMap.has(prop)){
        voteMap.set(prop, voteMap.get(prop)+1)
      }else{
        voteMap.set(prop, 1)
      }
    })
    // q: I want to convert this map to an array of objects with x and y as keys

    const rateMap = new Map()
    const rateData = data.votes;
    rateData.forEach((prop)=>{
      const rate = prop.cat
      if(rateMap.has(rate)){
        rateMap.set(rate, rateMap.get(rate)+1)
      }else{
        rateMap.set(rate, 1)
      }
    })
    const createArray = (res, item)=>{
      res[1].push(item.x)
      res[0].push(item.y)
      return res
    }
    const rateArr = Array.from(rateMap).map(([x,y])=>({x,y}))
    propRate = rateArr.reduce(createArray, [[],[]])
    const voteArr = Array.from(voteMap).map(([x,y])=>({x,y}))
    propVotes = voteArr.reduce(createArray, [[],[]])
    console.log(propVotes, propRate)

  }
  return (
    <section className='m-5'>
      <div>
        {error && (
          <MessageAlerts
            msg={error.response?.data?.msg || error.response?.data?.err}
            color={'danger'}
          />
        )}
        {isLoading && (
          <MessageAlerts msg={'Fetching your details!!'} color={'warning'} />
        )}
      </div>

      <div className='row'>
        <SingleGraph type='votes' chartData={propVotes} />
        <SingleGraph type='proposal' chartData={propRate} />
      </div>
    </section>
  )
}

export default Graphs
