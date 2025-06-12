import { useState, useEffect } from "react";
import { MENU_ITEM_DISPLAY_URL } from "../utils/constants";
import { useParams } from "react-router-dom";


const RestaturantItemMenuCard = () => {
  const [resMenuItemData, setResMenuItemData] = useState();
  const {resId}= useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resData = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const Json = await resData.json();
   
    setResMenuItemData(
      Json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    );
  };
  return (
    <div>
      <div>restaurant Menu Card</div>
      {console.log("here",resMenuItemData)}
      {resMenuItemData?.itemCards?.map((resItem) => {
        return (
          <div key={resItem?.card?.info?.id}  className="res-menu-item-card">
            <div>
              <img
                src={MENU_ITEM_DISPLAY_URL + resItem?.card?.info?.imageId}
              ></img>
            </div>
            <div className="res-menu-item-card-details">
              <div> {resItem?.card?.info?.name}</div>
              <br></br>
              <div>{resItem?.card?.info?.category}</div>
              <br></br>
              <div>{resItem?.card?.info?.description}</div>
              <br></br>
              <div>Rs:{resItem?.card?.info?.price}/-</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaturantItemMenuCard;
