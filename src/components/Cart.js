import React from "react";
import { useSelector } from "react-redux";
import store from "../Utils/store";
import FoodItem from "./FoodItem";
import cart from "../Images/cart.png";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <div>
      <img className="cart-image" src={cart}></img>
      <h1 className="empty-cart">Your cart is empty</h1>
      <h3 className="empty-cart">
        Looks like you have not added anything to your cart.
      </h3>
      <h3 className="empty-cart">Let's go and buy something!</h3>
    </div>
  ) : (
    <>
      {" "}
      <h1 className="cartHeading">Cart Items</h1>
      <button className="clear" onClick={() => clear()}>
        Clear Cart
      </button>
      {cartItems.map((item) => (
        <FoodItem key={item?.card?.info?.id} {...item?.card?.info} />
      ))}
    </>
  );
};

export default Cart;
