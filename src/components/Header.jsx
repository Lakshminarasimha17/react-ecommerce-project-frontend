import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header({ cart = [] }) {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += Number(cartItem?.quantity ?? 0);
  });

  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            <img className="logo" src="/images/image.png" alt="KLNS Store" />
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button" type="button">
            <img className="search-icon" src="images/icons/search-icon.png" alt="search" />
          </button>
        </div>

        <div className="right-section">
          <Link to="/orders" className="orders-link header-link">
            <span className="orders-text">Orders</span>
          </Link>

          <Link to="/checkout" className="cart-link header-link">
            <img className="cart-icon" src="images/icons/cart-icon.png" alt="cart" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
}
