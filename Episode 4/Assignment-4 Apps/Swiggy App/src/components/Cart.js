import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { MENU_ITEM_DISPLAY_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  //clears the cart
  const clearCartItems = () => {
    dispatch(clearCart());
  };

  console.log("cart items", cartItems);

  return (
    <div>
      <div>Cart Items</div>
      {cartItems.map((resItem) => {
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
            </div>
            <button
              onClick={() => {
                dispatch(removeItem());
              }}
            >
              Remove Item
            </button>
          </div>
        );
      })}

      <button
        onClick={() => {
          clearCartItems();
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
