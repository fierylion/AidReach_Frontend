import React, {useEffect, useState} from 'react'
import { Summary,Graphs,DonorProposals,Impact,Invite, DonateModal, VotePopup } from '../components/DonorComponents'
import useFetch from '../hooks'
import { useGlobalContext } from '../context'
const Donor = () => {
  const { donorData } = useGlobalContext()
  //Submitting data
  const { data, isLoading, error, obtainData } = useFetch()
  
  useEffect(() => {
    donorData &&
      obtainData(
        '/donor',
        'get',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + donorData.token,
          },
        }
      )
  }, [donorData])
  const [vote, setVote]= useState(null)
  return (
    <article className='container-fluid'>
      <div className='m-4'>
        <h3>Welcome Back,</h3>
        <h5 className='text-capitalize'>{data && data.donor.name}</h5>
        <small>Preview your summary</small>
      </div>
      {data && <Summary votes={data.donor.votes} donations={data.donor.totalDonations} />}
      <DonorProposals propos={[1,2,3,4,5]} setVote={setVote}/>
      <Graphs />
      <Impact/>
      <Invite/>
      <DonateModal/>
      <VotePopup vote={vote}/>
    </article>
  )
}

export default Donor