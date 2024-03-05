import React, { useState } from "react";
import c from "./ModelItem.module.scss";
import favorite from "../../img/mdi_heart-outline.svg";
import { useNavigate } from "react-router-dom";
export const ModelItem = (props) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  return (
    <div
      className={c.wrapper}
      onClick={() => {
        navigate(`/main/${props.id}`);
      }}
    >
      <div className={c.modelItem}>
        {props.cost && <div className={c.saleLayer}>-20%</div>}
        <button
          onClick={() => {
            setFavorite((prev) => !prev);
          }}
          className={favorite ? c.activeFavorite : c.favorite}
        ></button>
        <img
          className={c.image}
          src={
            props.photo
              ? props.photo
              : "https://s3-alpha-sig.figma.com/img/9273/dd09/f365a5e077dd228de3b871fe292caa4b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cqv2BeBag0rb1kiJMg7aU91zWXLetL8zyY4aSznZw1ps2dKYtVCqsENKhx536GSEDb3ruY96lSxgtOUGNvVgxWbHtezecGosuL-1J-yagVfSFL3eskl4q2jzGiFRaz~ectAlQx8xt10nXOaIXe-OliPi4J0bSwqiqLZONdUjXVNLh0eSM1quF01J7Is1FBIhaBMKxUNC-np~aQT1C8PKdWoFRfOVf-JnbeIPTDiC7pxUDh6FUrX4CmCGtlmYRL59Xw0Rg~Utoty93i3s6i6mdx5lMLfoWHCUaGwNg9uVW8yxYg8wRFm7Ez8X9GHkSeyAiVFBMTIIxRwOYHmJjimC8A__"
          }
          alt=""
        />
        {/* <div className={c.image}>ds</div> */}
        <div className={c.description}>
          <div className={c.name}>{props.name}</div>
          <div className={c.title}>{props.title}</div>
          <div className={c.id}>Код товару: {props.id}</div>
        </div>
        {props.cost ? (
          <div className={c.cost}>
            <div className={c.sale}>{props.cost}₴</div>
            {props.sale}₴
          </div>
        ) : (
          <div className={c.cost}>{props.sale}₴</div>
        )}
      </div>
    </div>
  );
};
