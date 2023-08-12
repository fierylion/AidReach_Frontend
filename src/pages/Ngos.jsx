import React, { useEffect } from 'react'
import {
  Summary,
  Graphs,
  DonorProposals,
  Impact,
  Invite,
  VerificationComponent,
  ProposalModal,
  VerificationModal
} from '../components/NgoComponents'
import { useGlobalContext } from '../context';
import useFetch from '../hooks';
import MessageAlerts from '../components/MessageAlerts';

const Ngos = () => {

  const { ngoData } = useGlobalContext()
  //Submitting data
  const { data, isLoading, error, obtainData } = useFetch()
  useEffect(
    ()=>{
      
      ngoData && obtainData('/ngo','get',{}, {
        headers:{
          Authorization: 'Bearer ' + ngoData.token
        }
      })
    }, [ngoData]
  )
  const verificationStatus = data && data.verificationStatus
  const isVerified = verificationStatus==='verified'
 
  
  return (
    <>
      {ngoData && (
        <article className='container-fluid'>
          <div className='m-4'>
            <div>
              {error && (
                <MessageAlerts
                  msg={error.response?.data?.msg || error.response?.data?.err}
                  color={'danger'}
                />
              )}
              {isLoading && (
                <MessageAlerts
                  msg={'Fetching your details!!'}
                  color={'warning'}
                />
              )}
            </div>
            <h3>Welcome Back,</h3>
            <h5 className='text-capitalize'>{data && data.name}</h5>
            {isVerified && <small>Preview your summary</small>}
          </div>
          {!isLoading && !isVerified && <VerificationComponent status={verificationStatus} />}

          {isVerified && (
            <>
              {data && <Summary received={100} noProp = {data.noProposals} />}
              <DonorProposals propos={[1, 2, 3, 4, 5]} />
              <Graphs />
            </>
          )}
          <Impact />
          <Invite />
          <ProposalModal />
          <VerificationModal />
        </article>
      )}
    </>
  )
}

export default Ngos
