import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> {price} บาท </p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        เพิ่มสินค้าลงในตระกร้า {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
//สุทิวัส