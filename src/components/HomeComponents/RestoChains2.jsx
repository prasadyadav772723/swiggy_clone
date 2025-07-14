import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {RESTO_CHAIN_IMG_URL2} from '../../mockData/ConstantData'
import RestoChain2Shimmer from '../ShimmerComponents/RestoChain2Shimmer'

function Image(props){
  return(
    <div className="RestoScrollerDiv">
        <div className="RestScrollerBox">
            <img src={RESTO_CHAIN_IMG_URL2+props?.data?.info?.cloudinaryImageId} alt=""/>
            <h2>{props?.data?.info?.name.length > 30 ?props.data.info.name.slice(0,25) +"..." : props?.data?.info?.name}</h2>
            <p className='rating-line'><i className="bi bi-star-fill star-icon"></i> {props?.data?.info?.avgRating} <i className="bi bi-dot "></i> {props?.data?.info?.sla?.slaString} </p>
            <p>{props?.data?.info?.cuisines.length>3?props?.data?.info?.cuisines.slice(0,3).join(",")+"...":props?.data?.info?.cuisines.join(",")}</p>
            <p>{props?.data?.info?.areaName}</p>
        </div>
    </div>
  )
}
function RestoChains2() {
    const [resto,setResto]=useState([])
    const search=useRef("")
      async function RestoScroller2() {
        const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const restoData=await response.json()
        // console.log(restoData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setResto(restoData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      useEffect(()=>{
        RestoScroller2()
      },[])


      // filters-section 
      function handleFastDelivery(){
        const result=resto.filter((x)=>{
          return x?.info?.sla?.deliveryTime<30 
        })
        setResto(result)
      }
      function handleRatings(){
        const result=resto.filter((x)=>{
          return x?.info?.avgRatingString>4.5
        })
        setResto(result)
      }

      // Search-section 

      function handleSearch(){
        const result=resto.filter((x)=>{
          return ( x?.info?.name.toLowerCase().includes(search.current.value.toLowerCase()) ||
           x?.info.areaName.toLowerCase().includes(search.current.value.toLowerCase()) || 
           x?.info.cuisines.join(",").toLowerCase().includes(search.current.value)
           )
        })
        setResto(result)
      }
      if(resto.length==0){

        return <>
        <h5>Restaurants with online food delivery in Bangalore</h5>
        <RestoChain2Shimmer/>
        </>
      }
      else{
        return (
          <div>
               <h5>Restaurants with online food delivery in Bangalore</h5>
               <div className="filters-section">
                <div className="filter-btns">
                      <button onClick={handleFastDelivery}>Fast Delivery</button>
                      <button onClick={handleRatings}>Ratings 4.5+</button>
                      <button>Rs. Less Than 300</button>
                </div>
                <div className="search">
                      <input type="text" ref={search} placeholder='Enter a Restaurent name' /> 
                       <button onClick={handleSearch}>Search</button>
                </div>
               </div>
            <div className='resto-scroller2'>
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
  

export default RestoChains2