import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import clearCart from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=>{store.cart.items});
    const dispatch = useDispatch();
    //clears the cart
    const clearCartItems =()=>{
      dispatch(clearCart())
    }

    console.log("cart items",cartItems);

  return (
    <div>
     <div>Cart Items</div>
     <button onClick={()=>{
        clearCartItems();
     }}>Clear Cart</button>
    </div>
  );
};

export default Cart;
