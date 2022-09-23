import React from "react";
import classes from "./Product.module.css";

const CartDetail: React.FC<{ Product: ProductType }> = ({ Product }) => {
  return (
    <>
      <div className={classes.card}>
        <img className={classes.productImg} src={Product.images} alt="" />
        <h3>{Product.title} </h3>
        <p>{Product.description}</p>
        <p>
          <b className={classes.price}>{Product.price}</b>
        </p>
      </div>
    </>
  );
};

export default CartDetail;