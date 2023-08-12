import React,{useState} from 'react'
import { useGlobalContext } from '../../context';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { BiSolidDownvote } from 'react-icons/bi'
import { BiSolidUpvote } from 'react-icons/bi'
import uuid from 'react-uuid';
import { useInViewport } from 'react-in-viewport'
import useFetch from '../../hooks';
import MessageAlerts from '../MessageAlerts';
import { useNavigate } from 'react-router-dom';

const Section6 = ({propos}) => {
  const { data, isLoading, error, obtainData } = useFetch()
  React.useEffect(() => {
    obtainData(
      'proposals/all',
      'get',
      {},
      {
       
      }
    )
  }, [])
 
 const [page, setPage] = React.useState(0);
 const {divideToThree}=useGlobalContext();
  const myRef = React.useRef()
   const { inViewport, enterCount } = useInViewport(myRef, {}, {}, {})
  

   const handleResize = (end = true) => {
     const width = window.innerWidth
     if (width < 780) {
       end && setNoImages(1)
       return 1
     }
     if (width < 1000) {
       end && setNoImages(2)
       return 2
     }

     end && setNoImages(3)
     return 3
   }
   const [noImages, setNoImages] = React.useState(handleResize(false))
   React.useEffect(() => {
   
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
   }, [])
 const dividedArr = data ? divideToThree(noImages, data.proposals) : []

  return (
    <>
      <div>
        {error && (
          <MessageAlerts
            msg={error.response?.data?.msg || error.response?.data?.err}
            color={'danger'}
          />
        )}
        {isLoading && (
          <MessageAlerts msg={'Fetching details!!'} color={'warning'} />
        )}
      </div>
      {dividedArr.length > 0 && (
        <section className='m-5 move_effect' id='sect6' ref={myRef}>
          {inViewport && (
            <div>
              <div className='d-flex justify-content-around move_effect'>
                <h3>Vote for some of the proposals</h3>
                <div>
                  <button
                    className='btn btn-outline-warning mx-3 my-1'
                    onClick={() =>
                      setPage(
                        (page - 1 + dividedArr.length) % dividedArr.length
                      )
                    }
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <button
                    className='btn btn-outline-warning mx-3 my-1'
                    onClick={() => setPage((page + 1) % dividedArr.length)}
                  >
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>

              <div className='mt-5 '>
                <ProposalCards proposals={dividedArr[page]} />
              </div>
            </div>
          )}
        </section>
      )}
    </>
  )
}
const ProposalCards=({proposals})=>{
 const navigate = useNavigate()

 return (
   
     <div className='row'>
       {proposals.map((proposal, ind) => {
         const propLength = proposals.length
         const propWidthMap = new Map([
           [1, 12],
           [2, 6],
           [3, 4],
         ])
         const size = propWidthMap.get(propLength)
         return (
           <div
             key={uuid()}
             className={`${
               propLength !== 1
                 ? 'col-' + size
                 : 'd-flex justify-content-center'
             }`}
           >
             <div className={`card h-100`} style={{ width: '18rem' }}>
               <img
                 className='card-img-top prop_img'
                 src={proposal.image}
                 alt='Card image cap'
               />
               <div className='card-body'>
                 <h5 className='card-title'>{proposal.title}</h5>
                 <ProposalDescription
                   description={proposal.description}
                   len={100}
                 />
               </div>
               <div className='card-footer'>
                 <div className='d-flex justify-content-around'>
                   <div>
                     <small>Proposed</small>
                     <small className='d-block text-center'>
                       {proposal.amount} tFill
                     </small>
                   </div>
                   <div>
                     <small>Votes</small>
                     <small className='d-block text-center'>100</small>
                   </div>
                   <div className='my-1'>
                     <div
                      
                       onClick={() =>
                         navigate('/donor')
                       }
                     >
                       <BiSolidUpvote id='vote_btn' />
                     </div>
                     <div
                       
                       onClick={() => navigate('/donor')
                        
                       }
                     >
                       <BiSolidDownvote id='vote_btn' />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         )
       })}
     </div>
   
 )
}
const ProposalDescription = ({ description, len }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <p className='card-text description_text'>
      {readMore ? description : description.substring(0, len)}
      {description.length > len && (
        <a
          className='small_text d-block'
          onClick={() => setReadMore(!readMore)}
        >
          Read More
        </a>
      )}
    </p>
  )
}

export default Section6