import React from 'react'
import worldGif from '../../assets/world.gif'
import CountUp from 'react-countup'
import { useInViewport } from 'react-in-viewport'
import { useGlobalContext } from '../../context'
import useFetch from '../../hooks'
import MessageAlerts from '../MessageAlerts'
import { Fade } from 'react-awesome-reveal'
const Impact = () => {
  const [count, setCount ] = React.useState(false)
 const { donorData } = useGlobalContext()
 //Submitting data
 const { data, isLoading, error, obtainData } = useFetch()
 React.useEffect(() => {
   donorData &&
     obtainData(
       'impact',
       'get',
       {},
       {
      
       }
     )
 }, [donorData])
 
  return (
    <section className='m-5 '>
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
      <h1 className='text-center m-4  '>Together We Can !</h1>
      <div className='d-flex justify-content-between flex-wrap'>
        <div>
          <img
            src={worldGif}
            alt='world'
            className='d-block mx-auto my-3 w-100'
          />
        </div>

        {data && (
          <div className='mx-auto my-4 p-5 border shadow rounded'>
            <Fade
              delay={1e1}
              cascade
              damping={1e-1}
              onVisibilityChange={(inView, entry) => {
                if (inView) {
                  setCount(true)
                } else {
                  setCount(false)
                }
              }}
            >
            {count && 
            <>
              <div className='m-2 my-3'>
                <h2>Donations</h2>
                <h3>
                  <CountUp
                    start={0}
                    end={Number.parseInt(data.data.donationAmount)}
                    duration={2.4}
                  />{' '}
                  <span className='small_text text-primary'>tFill</span>
                </h3>
              </div>
              <div className='m-2 my-3'>
                <h2>NGO's</h2>
                <h3>
                  <CountUp
                    start={0}
                    end={Number.parseInt(data.data.noNgos)}
                    duration={2.4}
                  />{' '}
                  +
                </h3>
              </div>
              <div className='m-2 my-3'>
                <h2>Proposals</h2>
                <h3>
                  <CountUp
                    start={0}
                    end={Number.parseInt(data.data.noProposals)}
                    duration={2.4}
                  />{' '}
                  +
                </h3>
              
              </div>
              
            </>}
            </Fade>
          </div>
        )}
      </div>
    </section>
  )
}

export default Impact