import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { OFFER_IMG, RECOMMEND_IMG } from "../mockData/ConstantData";
import { useDispatch } from "react-redux";
import {addItem} from '../redux/SwiggyCartSlice'
function Items(props) {
  return (
    <div>
      <div className="offersDiv">
        <div className="offer-box">
          <img src={OFFER_IMG + props?.data?.info?.offerLogo} alt="" />
          <div className="offer-box-p">
            <h5>{props?.data?.info?.header}</h5>
            <p>{props?.data?.info?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Recommended1(props) {
  const dispatch=useDispatch()
  function handleAddItem(){
    const cartItem={
      name:props?.data?.card?.info?.name,
      cost:((props?.data?.card?.info?.price)||(props?.data?.card?.info?.defaultPrice))/100
    }
    dispatch(addItem(cartItem))
  }
  return (
    <>
    <div className="recommendedSection">
      <div className="recommendedContent">
        <p>{(props?.data?.card?.info?.isVeg==1)?<i className="bi bi-record-btn  text-success bold fs-5"></i>:<i className="bi bi-caret-up-square text-danger bold fs-5"></i>} </p>
        <h5>{props?.data?.card?.info?.name}</h5>
        <p><i className="bi bi-currency-rupee"></i>{((props?.data?.card?.info?.price)||(props?.data?.card?.info?.defaultPrice))/100}</p>
        <p>{props?.data?.card?.info?.ratings?.aggregatedRating?.rating}</p>
        <p>{props?.data?.card?.info?.description} </p>
      </div>
      <div className="recommendedImg">
        <img src={RECOMMEND_IMG+props?.data?.card?.info?.imageId} alt="" />
        <div className="recommendedAddBtn">
        <button onClick={handleAddItem}>ADD</button>
      </div>
      </div>
      
    </div>
    <hr />
    </>
  );
}

function RestoItemsSep() {
  const [item, setItem] = useState([]);
  const [offer, setOffer] = useState([]);
  const [rec, setRec] = useState([]);
  const { name, id } = useParams();
  // console.log(id)
  async function ItemFetch() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const responseData = await response.json();
    setItem(responseData?.data?.cards[2]?.card?.card);
    // console.log(responseData?.data?.cards[3])
    setOffer(
      responseData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        .offers
    );
    // console.log(responseData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    setRec(responseData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  }
  useEffect(() => {
    ItemFetch();
  });

  return (
    <div className="ItemBody">
      <p>{location.pathname.replace(/[0-9%]/g, " ")}</p>
      <div className="ItemBody-p1">
        <h4>{name}</h4>
      </div>
      <div className="ItemBody-p2">
        <h6>Order Online</h6>
        <h6>Dineout</h6>
      </div>
      <hr />
      <div className="ItemBody-p3">
        <h6>
          {" "}
          <i className="bi bi-star-fill star-icon"></i> {item?.info?.avgRating}{" "}
          ({item?.info?.totalRatingsString})• {item?.info?.costForTwoMessage}
        </h6>
        <p>{item?.info?.cuisines.join(",")}</p>
        <h6>
          Outlet <span>{item?.info?.areaName}</span>
          <i className="bi bi-caret-down-fill down-arrow"></i>
        </h6>
        <h6>{item?.info?.sla?.slaString}</h6>
      </div>
      <h5>Deals for you</h5>
      <div className="offer-section">
        {offer.map((x, index) => {
          return <Items data={x} key={index} />;
        })}
      </div>
      <div className="ItemsMenuName">
        <i className="bi bi-arrow-left"></i> M E N U{" "}
        <i className="bi bi-arrow-right"></i>
      </div>
      <div className="ItemSearchButton">
        <button>
          Search for Dishes <i className="bi bi-search"></i>
        </button>
      </div>
      {/* recommended section 1  */}
      <div className=" my-4">
          <div className="accordion" id="accordionExample">
              <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h5>Recommended({rec.length})</h5>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body ">
                {
                  rec.map((x,index)=>{
                     return <Recommended1 data={x} key={index}/>
                  })
                }
              </div>
              
            </div>
              </div>
          </div>
      </div>
      <hr />
    </div>
  );
}

export default RestoItemsSep;
