import React, { useEffect, useState } from 'react'

const divideToThree = (noEle, arr) => {
  let sta = 0
  let en = noEle
  let result = []
  while (sta < arr.length) {
    result.push(arr.slice(sta, en))
    sta = en
    en += noEle
  }
  return result
}
  
const Section3 = ({imageCarousel}) => {
  const [noImages, setNoImages] = useState(3)
  const handleResize = ()=>{
    const width = window.innerWidth;
    console.log(width)
    if (width < 410){
      setNoImages(1)
      return
    }
    if (width < 769) {
        setNoImages(2)
        return
    }
    

    setNoImages(3)
    
  }
  useEffect(
    ()=>{
      window.addEventListener('resize', handleResize)
      return ()=> window.removeEventListener('resize', handleResize)
    },[]
  )
  const images =(imageCarousel)? divideToThree(noImages, imageCarousel): []
  return (
    <section className='my-5'>
      <div>
        <div id='demo' className='carousel slide' data-bs-ride='carousel'>
          {/* Indicators/dots */}
          <div className='carousel-indicators'>
          { 
            images.map((arr, ind)=> <button type='button' data-bs-target='#demo' data-bs-slide-to={ind} className={`${ind===0 && 'active'}`}/> )
            
          }
          </div>
          {/* The slideshow/carousel */}
          <div className='carousel-inner'>
          { images.map((img, ind)=>{
            return (
              <div className={`carousel-item ${ind === 0 && 'active'}`}>
                <div className='row text-center'>
                { img.map(
                  (singleImage, ind)=>{
                    const noImages= img.length;
                    const imgWidthMap = new Map([
                      [1, 12], [2, 6], [3, 4]
                    ])

                   return  (<div className={`col-${imgWidthMap.get(noImages)}`} key={ind}>
                    <img src={singleImage} alt={`Image ${ind}`} className='card_img' />
                  </div>)}
                )
                  
                 
                }
                </div>
              </div>
            )
          })


          }
          
          </div>
          {/* Left and right controls/icons */}
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#demo'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' />
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#demo'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section3