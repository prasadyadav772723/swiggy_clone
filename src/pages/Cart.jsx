import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RAZORPAY_API } from '../mockData/ConstantData'

function CartModule(props){
  return <div className='cart-items'>
  <h4>{props?.data.name}</h4>
  <p><i className="bi bi-currency-rupee"></i>{props?.data.cost} </p>
</div>
}

function Cart() {
  const cartArray=useSelector((state)=>state.cart.items)
  const [totalCost,setTotalCost]=useState(0)
  const navigate=useNavigate()
  useEffect(()=>{
    const finalCost=cartArray.reduce((prev,curr)=>{
      return prev=prev+curr.cost
    },0)
    setTotalCost(finalCost||0)
  },[cartArray])

  const handlePayment = async () => {
    
      // Configure Razorpay options
      const options = {
        key: RAZORPAY_API, // Replace with your actual Razorpay key
        amount: totalCost *100, // Amount in paise (1 INR = 100 paise)
        handler: (response) => {
          // Handle successful payment response
          alert('Payment successful!');
          console.log('Payment Response:', response);
          navigate('/payment-success')

          // You can add additional logic here, such as redirecting the user or showing a success message
        },
        prefill: {
          name: 'customer name', // Replace with customer's name
          email: 'customer@example.com', // Replace with customer's email
          contact: '9999999999', // Replace with customer's phone number
        }
      };
      // Initialize and open the Razorpay payment modal
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    
  };
  return (
    <div>
      {
        cartArray.map((x,index)=>{
            return <CartModule data={x} key={index} />
        })
      }
      <div className=" cart-items paybtn"> <button onClick={handlePayment}>Click to pay <i className="bi bi-currency-rupee"></i>{totalCost}</button> </div>
    </div>
  )
}

export default Cart