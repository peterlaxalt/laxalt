/**
 *
 * MasonryGallery.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website MasonryGallery Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import {} from "../../../constants/Root";
import {} from "../../../constants/styles/Animation";
import {} from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const MasonryGalleryClassName = `masonry-gallery`;

export const MasonryGalleryStyle = styled.section`
  &.${MasonryGalleryClassName} {

    .${MasonryGalleryClassName}__list {
      display: flex;
      flex-wrap: wrap;

      .${MasonryGalleryClassName}__item {
        width: calc(100% / 2);
        /* min-width: calc(100% / 3); */

        /* flex: 1; */

        /* flex-shrink: 0; */

        /* &:nth-child(3n+4) {
          width: calc(100% / 2);
          flex: unset;
        }

        &:nth-child(3n+3) {
          width: calc(100% / 2);
          flex: 1;
        } */
      }
    }
  }
`;
