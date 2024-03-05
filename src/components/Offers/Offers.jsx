import React, { useEffect, useState } from "react";
import { ModelItem } from "../ModelItem/ModelItem";
import c from "./Offers.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "./../../App.css";
import { v1 } from "uuid";


export const Offers = (props) => {
  const [prev, setPrev] = useState(v1);
  const [next, setNext] = useState(v1);
  let product = props.product.filter((p) => {
    return p.type.some((t) => t === props.type);
  });
  useEffect(() => {}, []);
  return (
    <div className={c.wrapper}>
      <div className={c.main}>
        <div className={c.title}>{props.title}</div>
        <div className={c.buttons}>
          <div className={`${c.prev}_${prev} ` + c.prev}></div>
          <div className={`${c.next}_${next} ` + c.next}></div>
        </div>
      </div>

      <Swiper
        spaceBetween={32}
        slidesPerView={4}
        navigation={{
          prevEl: `.${c.prev}_${prev}`,
          nextEl: `.${c.next}_${next}`,
        }}
        modules={[Grid, Navigation]}
        className="mySwiper"
      >
        {product.map((p) => {
          return (
            <SwiperSlide>
              <ModelItem
                key={p.id}
                name={p.name}
                title={p.title}
                id={p.id}
                sale={p.sale}
                cost={p.cost}
                photo={p.photo.main}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
