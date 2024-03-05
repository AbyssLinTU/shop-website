import React, { useContext, useEffect, useState } from "react";
import c from "./Basket.module.scss";
import cl from "classnames";
import { StateContext } from "../../context/context";
export const CartItem = ({ product, setProduct, products, updateAmount }) => {
  const { state1, removeOrder, updateOrder } = useContext(StateContext);

  function removeOrderPage(id) {
    const stateFiltred = products.filter((or) => {
      return or.id !== id;
    });
    setProduct(stateFiltred);
    removeOrder(id);
  }
  useEffect(() => {}, [state1.order]);

  return (
    <>
      <div className={c.grid__row}>
        <div className={c.grid__el}>
          {product.img && <img src={product.img} className={cl(c.grid__img)} />}
        </div>
        <span className={cl(c.grid__el, c.grid__title_2)}>{product.name}</span>
        <div className={cl(c.grid__el, c.grid__title_2)}>
          <div className={cl(c.grid__buttons, c.grid__el)}>
            <button
              className={c.button__plus}
              onClick={() => updateOrder(product.id, true)}
            >
              +
            </button>
            <span className={c.grid__amount}>{product.amount}</span>
            <button
              className={c.button__minus}
              onClick={() => {
                updateOrder(product.id, false);
              }}
            >
              -
            </button>
          </div>
        </div>
        <span className={cl(c.grid__el, c.grid__title_2)}>
          {product.price} ₴
        </span>
        <span className={cl(c.grid__el, c.grid__title_2)}>
          {product.price * product.amount} ₴
        </span>
        <div className={c.remove}>
          <div
            className={c.button__remove__container}
            onClick={() => {
              removeOrderPage(product.id);
            }}
          >
            <button
              className={c.button__remove}
              onClick={() => {
                removeOrderPage(product.id);
              }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};
