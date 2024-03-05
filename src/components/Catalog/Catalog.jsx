import React from "react";
import { CatalogItem } from "./CatalogItem";
import c from "./Catalog.module.scss";
export const Catalog = () => {
  return (
    <div className={c.catalog}>
      <div className={c.catalogMain}>
        <div>Каталог</div>
      </div>
      <CatalogItem title="Прямі дивани" />
      <CatalogItem title="Кутові дивани" />
      <CatalogItem title="Ліжка" />
      <CatalogItem title="Дитячі меблі DOR" />
      <CatalogItem title="Підлокітники-тумбочки" />
      <CatalogItem title="Бенджамін" />
      <CatalogItem title="Тіффані" />
      <CatalogItem title="Дивани з розкладкою вперед" />
      <CatalogItem title="Модульні кутові дивани" />
      <CatalogItem title="Модульні прямі дивани" last={true} />
    </div>
  );
};
