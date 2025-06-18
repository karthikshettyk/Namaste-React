import { useState, useEffect } from "react";
import { MENU_ITEM_DISPLAY_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaturantItemMenuCard = () => {
  const [resMenuItemData, setResMenuItemData] = useState();
  const { resId } = useParams();
  //const [cartData, setCartData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resData = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const Json = await resData.json();

    setResMenuItemData(
      Json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
  };

  const addToCart = (resItem) => {
    dispatch(addItem(resItem));
    //setCartData((prevItems) => [...prevItems, resItem]);
  };

  return (
    <div>
      <div>Menu Card</div>
      {resMenuItemData?.itemCards?.map((resItem) => {
        return (
          <div key={resItem?.card?.info?.id} className="res-menu-item-card">
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
              <br></br>
              <button
                onClick={() => {
                  addToCart(resItem);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaturantItemMenuCard;
