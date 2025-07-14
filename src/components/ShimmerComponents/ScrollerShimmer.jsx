import React from 'react'

function Shimmer(){
return <div>
<div className="scollerShimmerBox">
  
</div>
</div>
}
function ScrollerShimmer() {
  return (
    <div className='scrollerShimmerDiv'>
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

export default ScrollerShimmer