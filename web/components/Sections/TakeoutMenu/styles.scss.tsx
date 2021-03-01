/**
 *
 * TakeoutMenu.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website TakeoutMenu Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { ScaleXIn } from "../../../constants/styles/Animation";
import { Theme } from "../../../constants/Theme";
import {} from "../../MellowFrameHeader/styles.scss";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TakeoutMenuClassName = `takeout-menu`;
export const TakeoutMenuColumnClassName = `takeout-menu-col`;

export const TakeoutMenuStyle = styled.section`
  &.${TakeoutMenuClassName} {
    .${TakeoutMenuClassName}__top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      padding-top: calc(${Root.Size} * 4);
      padding-bottom: calc(${Root.Size} * 2);

      @media (max-width: ${Theme.Base.Media.Width.Md}) { 
        display: block;
      }

      &__col {
        width: 50%;

        @media (max-width: ${Theme.Base.Media.Width.Md}) { 
          width: 100%;
        }

        &__row {
          width: 100%;
        }

        &--right {
          .${TakeoutMenuClassName}__top__col__row {
            text-align: right;
          }
        }
      }

      svg {
        path {
          fill: ${Theme.Color.varForeground};
        }
      }
    }

    .${TakeoutMenuClassName}__bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .${TakeoutMenuColumnClassName} {
        width: calc(100% / 3);

        @media (max-width: ${Theme.Base.Media.Width.Md}) { 
          width: 100%;
        }

        &--is-alternate-row {
          width: calc(100% / 1);

          @media (max-width: ${Theme.Base.Media.Width.Md}) { 
            width: 100%;
          }
        }
      }
    }
  }
`;

export const TakeoutMenuColumnStyle = styled.div`
  &.${TakeoutMenuColumnClassName} {

    margin-bottom: calc(${Root.Size} * 2);
    padding: calc(${Root.Size} * 2);

    .${TakeoutMenuColumnClassName}__title {
      font-family: "Georgia", serif;
      font-style: italic;
      text-transform: uppercase;
      text-align: center;
      font-size: 2.5vw;

      margin-bottom: ${Root.Size};
    }

    .${TakeoutMenuColumnClassName}__items {

      &__item {
        display: flex;
        justify-content: space-between;

        text-transform: uppercase;

        padding-bottom: .5em;

        &__count,
        &__label {
          font-weight: 600;
        }

        &__count {
          margin-right: 1em;

          min-width: 35px;
        }

        &__label {
          flex: 1;

          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          margin-right: .5em;

          &:after {
            content: "";

            display: block;

            position: relative;

            bottom: 2px;

            height: .75em;

            flex: 1;

            margin-left: .5em;

            border-bottom: 2px dotted ${Theme.Color.varForeground};
          }
        }
      }
    }

    &.${TakeoutMenuColumnClassName}--is-alternate-row {
      .${TakeoutMenuColumnClassName}__items {
        columns: 3;
        column-gap: calc(${Root.Size} * 4);
        column-fill: balance-all;
        break-inside: avoid;

        @media (max-width: ${Theme.Base.Media.Width.Md}) { 
          columns: 1;
        }


        &__item {
          break-inside: avoid;
          -webkit-column-break-after: avoid;
        }
      }
    }
  }
`;
