import React from "react";
import c from "./Catalog.module.scss";
export const CatalogItem = (props) => {
  return (
    <div className={c.catalogItem}>
      <div className={c.catalog__inner}>
        <div className={props.last ? `${c.title} ${c.last}` : `${c.title}`}>
          {props.title}
        </div>
      </div>
    </div>
  );
};
