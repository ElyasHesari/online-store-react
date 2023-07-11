import React from "react";
import Builder from "./Builder/Builder";
import "./Controls.css";

const products = [
  { title: "Product 1", type: "product1" },
  { title: "Product 2", type: "product2" },
  { title: "Product 3", type: "product3" },
  { title: "Product 4", type: "product4" },
];

const Controls = (props) => {
  return (
    <div className="controls">
      <div>
        <p>total price: {props.price}</p>
      </div>
      {products.map((item) => {
        return (
          <Builder
            title={item.title}
            key={item.title}
            add={() => props.productAdd(item.type)}
            remove={() => props.productRemove(item.type)}
          />
        );
      })}
    </div>
  );
};

export default Controls;
