// Core
import React from "react";
import { CSSProperties } from "styled-components";
import { DuotoneImage } from "../../DuotoneImage";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";

// Styles
import { MasonryGalleryClassName, MasonryGalleryStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LXLT_MasonryItem = {
  src: string;
  alt?: string;
};

export type LXLT_Section_MasonryGallery = LXLT_SimpleContentNode;

/**
 *
 * @name MasonryGallery
 * @author Peter Laxalt
 * @description Marquee rotating through items.
 * @requires /studio/sections/MasonryGallery
 *
 */
export const MasonryGallery: React.FunctionComponent<LXLT_Section_MasonryGallery> = ({}) => {
  let images = Array.from(Array(18));
  let pathPrefix = "/img/about/about-";
  let extension = ".jpg";

  return (
    <MasonryGalleryStyle className={`${MasonryGalleryClassName}`}>
      <div className={`${MasonryGalleryClassName}__inner`}>
        <ul className={`${MasonryGalleryClassName}__list`}>
          {images.map((_, idx: number) => {
            return (
              <li key={idx} className={`${MasonryGalleryClassName}__item`}>
                <DuotoneImage
                  src={`${pathPrefix}${idx + 1}${extension}`}
                  alt={`${idx + 1}`}
                  aspectRatio={1}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </MasonryGalleryStyle>
  );
};

// End Component
// __________________________________________________________________________________________
