import React from 'react'
import CountUp from 'react-countup'
import {useInViewport} from 'react-in-viewport'
import MessageAlerts from '../MessageAlerts'
import useFetch from '../../hooks'
import { useGlobalContext } from '../../context'
import {Flip} from 'react-awesome-reveal'

const Section4 = () => {
  // no of donors, proposals, ngos, donations
  //Submitting data
  const { data, isLoading, error, obtainData } = useFetch()
  React.useEffect(() => {
 obtainData('impact', 'get', {}, {})
  }, [])
  // const data = {
  //   donors: 100,
  //   proposals: 100,
  //   ngos: 100,
  //   donations: 100,
  // }
  const [count, setCount] = React.useState(false)

  return (
    <section className='p-3 my-5' id='sect4'>
      <Flip onVisibilityChange={(inView,entry)=>{
        if(inView ){
          setCount(true)
        }
        else{
          setCount(false)
        }

      }}>
      { count &&
        <>
          <div>
            {error && (
              <MessageAlerts
                msg={error.response?.data?.msg || error.response?.data?.err}
                color={'danger'}
              />
            )}
            {isLoading && (
              <MessageAlerts msg={'Fetching  details!!'} color={'warning'} />
            )}
          </div>
          {data && (
            <div className='text-center move_effect move_effect'>
              <div className='row'>
                <div className=' col-lg-3 col-sm-6 p-3'>
                  <h4>Impact Contributions</h4>
                  <h1>
                    <CountUp
                      start={0}
                      end={Number.parseInt(data.data.donationAmount)}
                      duration={5}
                    />{' '}
                    <span className='small_text text-primary'>tFill</span>+
                  </h1>
                </div>
                <div className=' col-lg-3 col-sm-6 p-3 '>
                  <h4>Empowerment Proposals</h4>
                  <h1>
                    <CountUp
                      start={0}
                      end={Number.parseInt(data.data.noProposals)}
                      duration={5}
                    />{' '}
                    +
                  </h1>
                </div>
                <div className=' col-lg-3 col-sm-6 p-3'>
                  <h4>Humanitarian Supporters</h4>
                  <h1>
                    <CountUp
                      start={0}
                      end={Number.parseInt(data.data?.noDonors) || 10}
                      duration={5}
                    />{' '}
                    +
                  </h1>
                </div>
                <div className='col-sm-6 col-lg-3  p-3 '>
                  <h4>Change Agents</h4>
                  <h1>
                    <CountUp
                      start={0}
                      end={Number.parseInt(data.data.noNgos)}
                      duration={5}
                    />{' '}
                    +
                  </h1>
                </div>
              </div>
            </div>
          )}
        </>
      }
      </Flip>
    </section>
  )
}

export default Section4