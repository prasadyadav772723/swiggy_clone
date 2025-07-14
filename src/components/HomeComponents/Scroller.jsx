import React, { useEffect, useState } from 'react'
import {IMAGE_URL} from '../../mockData/ConstantData'
import ScrollerShimmer from '../ShimmerComponents/ScrollerShimmer'
import { useNavigate } from 'react-router-dom'
function Image(props){
  return <img className='scroll-img' src={IMAGE_URL+props?.data?.imageId}/>
}
function Scroller() {
  const [images,setImages]=useState([])
  const [time,setTime]=useState(0)
  const navigate=useNavigate()
  async function SwiggyScroller() {
    const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const imagesData=await response.json()
    // console.log(imagesData?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    setImages(imagesData?.data?.cards[0]?.card?.card?.imageGridCards?.info)
  }
  useEffect(()=>{
  SwiggyScroller()
  })

  // errorpage 
  useEffect(()=>{
    if(images.length==0){
      const timeout=setTimeout(()=>{
        navigate("/error");
      },4000)
      setTime(timeout)
    }
  },[])

  if(images.length==0){
    return <ScrollerShimmer/>
  }
  else{
    clearTimeout(time)
 return (
    <div>
      <h5>What's on your mind?</h5>
      <div className='img-scroller'>
        {
          images.map((x,index)=>{
            return <Image key={index} data={x}/>
          })
        }
      </div>
      <hr />
    </div>
  )
}
  }
  
 

export default Scroller