import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>รายการสินค้า</h1>
      </div>
      <div className="button">
      <button onClick > สินค้าทั้งหมด </button>
      <button onClick > ความงาม </button>
      <button onClick >อาหาร</button>
      <button onClick > อุปกรณ์อิเล็กทรอนิกส์ </button>
      <button onClick > สุขภาพ </button>
      <button onClick > ของใช้ภายในบ้าน </button>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
