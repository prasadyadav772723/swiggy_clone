import React from 'react'

function Shimmer(){
    return <div>
    <div className="RestoShimmerBox">
        <img src="" alt="" />
        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
      
    </div>
    </div>
    }
function RestoChainShimmer() {
  return (
    <div className='RestoShimmerDiv'>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    <Shimmer/>
    </div>
  )
}

export default RestoChainShimmer