import React, { useContext } from "react";
import { Catalog } from "../Catalog/Catalog";
import { Offers } from "../Offers/Offers";
import Cards from "../CardItem/Cards";
import c from "./MainPage.module.scss";
import image from "./../../img/sdd 1.svg";
import { StateContext } from "../../context/context";
export const MainPage = (props) => {
  const { state1 } = useContext(StateContext);
  return (
    <div>
      <div className={c.catalogSlot}>
        <Catalog className={c.catalog} />

        <img className={c.image} src={image} alt="" />
      </div>
      <Offers product={state1.product} type="sale" title="Flash Sales" />
      <Offers product={state1.product} type="new" title="Нові моделі" />
      <Offers
        product={state1.product}
        type="popular"
        title="Популярні моделі"
      />
      <Cards />
    </div>
  );
};
