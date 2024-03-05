import React, { useContext, useEffect, useState } from "react";
import { Offers } from "../Offers/Offers";
import { StateContext } from "../../context/context";
import { useParams } from "react-router-dom";
import { Tree } from "../Tree/Tree";
import c from "./ViewPage.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperView } from "./SwiperView";
import { TabBar } from "../TabBar/TabBar";

export const ViewPage = (props) => {
  const [added, setAdded] = useState(false);
  const [product, setProduct] = useState({});
  const { state1, addOrder } = useContext(StateContext);
  const { id } = useParams();

  useEffect(() => {
    setAdded(false);
    const fetchedProduct = state1.product.find((p) => p.id === parseInt(id));
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    }
  }, [id, state1.product]);
  const handleAddToBasket = () => {
    if (
      product &&
      !state1.order.some((orderProduct) => orderProduct.id === product.id)
    ) {
      setAdded(true);
      addOrder(product);
    }
  };
  return (
    <div className={c.viewpage}>
      <Tree title={product.name} />
      <div className={c.view}>
        <div className={c.images}>
          {product.photo && (
            <img className={c.view__image} src={product.photo.main} alt="" />
          )}
          {product.photo && (
            <img
              className={c.view__image}
              src={product.photo.display1}
              alt=""
            />
          )}
          {product.photo && (
            <img
              className={c.view__image}
              src={product.photo.display2}
              alt=""
            />
          )}
          {product.photo && (
            <img
              className={c.view__image}
              src={product.photo.display3}
              alt=""
            />
          )}
        </div>
        {product.photo && <SwiperView product={product} />}
        <div className={c.product__info2}>
          <div className={c.product__info}>
            <div>
              <div className={c.product__name}>{product.name}</div>
              <div className={c.product__title}>{product.title}</div>
            </div>

            <div className={c.product__sale}>{product.sale} ₴</div>

            <button
              className={
                state1.order.some(
                  (orderProduct) => orderProduct.id === product.id
                ) || added
                  ? c.added_button
                  : c.add__button
              }
              onClick={handleAddToBasket}
            >
              {state1.order.some(
                (orderProduct) => orderProduct.id === product.id
              ) || added
                ? "Додано у кошик"
                : "Додати у кошик"}
            </button>
          </div>
          <div className={c.input__colors}>
            <p className={c.input__text}>Колір:</p>
            <div className={`${c.texture} ${c.texture_1}`}></div>
            <div className={`${c.texture} ${c.texture_2}`}></div>
            <div className={`${c.texture} ${c.texture_3}`}></div>
            <div className={`${c.texture} ${c.texture_4}`}></div>
            <div className={`${c.texture} ${c.texture_5}`}></div>
            <div className={`${c.texture} ${c.texture_6}`}></div>
            <div className={`${c.texture} ${c.texture_7}`}></div>
          </div>
        </div>
      </div>
      <div className={c.product__description}>
        <div className={c.container}>
          <div className={c.description__grid}>
            <TabBar />
            {product.photo && (
              <img
                className={c.description__image}
                src={product.photo.main}
                alt=""
              />
            )}
          </div>
        </div>
      </div>

      <Offers product={state1.product} type="new" title="Нові моделі" />
      <Offers
        product={state1.product}
        type="popular"
        title="Популярні моделі"
      />
    </div>
  );
};
