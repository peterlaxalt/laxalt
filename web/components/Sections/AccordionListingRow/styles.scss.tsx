/**
 *
 * AccordionListingRow.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website AccordionListingRow Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { ScaleXIn } from "../../../constants/styles/Animation";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";
import {} from "../../MellowFrameHeader/styles.scss";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AccordionListingRowClassName = `accordion-listing-row`;

export const AccordionListingRowStyle = styled.section`
  &.${AccordionListingRowClassName} {
    &.${AccordionListingRowClassName}--is-not-visible {
      .${AccordionListingRowClassName}__content {
        display: none;
      }
    }

    &.${AccordionListingRowClassName}--is-visible {
      .${AccordionListingRowClassName}__title__btn__label--indicator {
        &:after {
          opacity: 1;
          transform: translate(0%, -50%) rotate(135deg);
        }

        &:before {
          opacity: 0;
          transform: translate(0%, 50%);
        }
      }

      .${AccordionListingRowClassName}__title__btn {
        &:hover {
          .${AccordionListingRowClassName}__title__btn__label--indicator {
            &:after {
              opacity: 1;
              transform: translate(0%, -50%) rotate(135deg);
            }
          }
        }
      }
    }

    .${AccordionListingRowClassName}__title__btn,
    .${AccordionListingRowClassName}__content {
      position: relative;

      &:after {
        content: "";

        position: absolute;

        width: 100%;
        height: 2px;

        left: 0px;
        bottom: 0px;

        animation: ${ScaleXIn} 2s ease 1;
        animation-fill-mode: forwards;

        background: ${Theme.Color.varForeground};
      }
    }

    .${AccordionListingRowClassName}__title {
      width: 100%;

      &__btn {
        appearance: none;

        border: 0;
        outline: 0;

        background: none;

        width: 100%;

        padding: calc(${Root.Size} * 2) 0;
        margin: 0;

        cursor: pointer;

        display: flex;
        justify-content: space-between;

        font-size: 7vw;
        text-transform: uppercase;

        overflow: hidden;

        &__label {
          position: relative;

          color: ${Theme.Color.varForeground};

          &:first-child {
            width: calc(100% * 0.6666666);

            text-align: left;
          }

          &:last-child {
            flex: 1;
            text-align: right;
          }

          &--indicator {
            height: 7vw;

            &:before {
              content: "&";

              position: absolute;

              right: 0%;
              top: 50%;

              transform: translate(0%, -50%);

              font-family: "Georgia", serif;

              opacity: 1;

              font-style: italic;
            }

            &:after {
              content: "+";

              position: absolute;

              right: 0%;
              top: 50%;

              transform: translate(0%, -150%) rotate(0deg);

              opacity: 0;

              font-family: "Georgia", serif;

              font-style: italic;
            }

            &:before,
            &:after {
              transition: transform 0.5s ease, opacity 0.5s ease;
              transform-origin: center center;
            }
          }
        }

        &:hover {
          .${AccordionListingRowClassName}__title__btn__label--indicator {
            &:after {
              opacity: 1;
              transform: translate(0%, -50%) rotate(0deg);
            }

            &:before {
              opacity: 0;
              transform: translate(0%, 50%);
            }
          }
        }
      }
    }
  }
`;
