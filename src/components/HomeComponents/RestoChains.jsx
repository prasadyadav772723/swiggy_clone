import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {RESTO_CHAIN_IMG_URL} from '../../mockData/ConstantData'
import RestoChainShimmer from '../ShimmerComponents/RestoChainShimmer'
function Image(props){
  return(
    <div className="RestoScrollerDiv">
        <div className="RestScrollerBox">
            <img src={RESTO_CHAIN_IMG_URL+props?.data?.info?.cloudinaryImageId} alt=""/>
            <h2>{props?.data?.info?.name.length > 30 ?props.data.info.name.slice(0,25) +"..." : props?.data?.info?.name}</h2>
            <p className='rating-line'><i className="bi bi-star-fill star-icon"></i> {props?.data?.info?.avgRating} <i className="bi bi-dot "></i> {props?.data?.info?.sla?.slaString} </p>
            <p>{props?.data?.info?.cuisines.length>3?props?.data?.info?.cuisines.slice(0,3).join(",")+"...":props?.data?.info?.cuisines.join(",")}</p>
            <p>{props?.data?.info?.areaName}</p>
        </div>
    </div>
  )
}

function RestoChains() {
  const [resto,setResto]=useState([])
  async function RestoScroller() {
    const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const restoData=await response.json()
    // console.log(restoData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setResto(restoData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  useEffect(()=>{
    RestoScroller()
  },[])
  if(resto.length==0){
    return <>
     <h5>Top Restaurant chains in bangalore</h5>
     <RestoChainShimmer/>
    </>
  }
  else{
    return (
      <div>
       <h5>Top Restaurant chains in bangalore</h5>
        <div className='resto-scroller'>
          {
            resto.map((x,index)=>{
              return <Link to={`/city/banglore/${x.info.name}/${x.info.id}`} className='link-style'><Image key={index} data={x}/></Link>
            })
          }
        </div>
          <hr />
      </div>
    )
  }
  }
 

export default RestoChains