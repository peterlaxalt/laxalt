/**
 *
 * TableListing.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website TableListing Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { ScaleXIn } from "../../../constants/styles/Animation";
import { Theme } from "../../../constants/Theme";
import { CssFrameBorderWidth } from "../../MellowFrameHeader/styles.scss";
import { OpenIconClassName } from "../../_svg/OpenIcon/OpenIcon";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TableListingClassName = `table-listing`;
export const TableColumnListingClassName = `table-listing--display-column`;
export const TableRowListingClassName = `table-listing--display-rows`;

export const TableListingStyle = styled.section`
  &:last-child {
    padding-bottom: calc(${Root.Size} * 3);
  }

  &:first-child {
    &.${TableListingClassName} {
      border-top: 0px solid ${Theme.Color.varForeground};
      margin-top: calc(${Root.Size} * 1);
    }
  }

  &.${TableListingClassName} {
    border-top: 2px solid ${Theme.Color.varForeground};
    margin-top: calc(${Root.Size} * 3);

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      margin-top: calc(${Root.Size} * 1.25);
      padding-top: calc(${Root.Size} * 1);
    }

    .${TableListingClassName}__inner {
      display: flex;
      justify-content: space-between;

      padding-top: calc(${Root.Size} * 1);

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        display: block;
      }
    }

    .${TableListingClassName}__col {
      &--table-name {
        width: calc(100% / 3);
        min-width: calc(100% / 3);
        flex-shrink: 0;

        h3 {
          font-family: ${Theme.Font.Code};
          text-transform: uppercase;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            font-size: .9rem;
          }
        }
      }

      &--data {
        flex: 1;
      }
    }

    .${TableListingClassName}__item {
      font-size: 0.85rem;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 1.25;

      display: block;

      padding: 0.35em 0;
    }

    .${TableListingClassName}__columns-data {
      columns: 3;
      column-gap: calc(${Root.Size} / 2);

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        columns: 1;

        .${TableListingClassName}__item {
          position: relative;

          padding-top: 1em;
          margin-bottom: .5em;

          &:before {
            content: "";

            position: absolute;

            left: 0;
            top: 0;

            width: 100%;
            height: 1px;

            animation: ${ScaleXIn} 2s ease 1;

            background: currentColor;
          }
        }
      }
    }

    .${TableListingClassName}__rows-data {
      .${TableListingClassName}__row {
        display: flex;

        justify-content: space-between;

        position: relative;

        padding-bottom: 0.5em;
        padding-top: 0.5em;

       

        .${OpenIconClassName} {
          width: 25px;
          height: 25px;
        }

        &:not(.${TableListingClassName}__row--headers) {
          &:before {
            content: "";

            position: absolute;

            left: 0;
            top: 0;

            width: 100%;
            height: 1px;

            background: ${Theme.Color.varForeground};
          }
        }

        &--headers {
          .${TableListingClassName}__item {
            font-weight: normal;
          }
        }

        .${TableListingClassName}__item {
          width: calc(100% / var(--${TableListingClassName}__table-columns));

          padding-right: ${Root.Size};

          a {
            color: ${Theme.Color.varForeground};
          }

          // __________________________
          // Temporary
          &:first-child {
            width: 55%;
          }

          &:last-child {
            text-align: right;
            padding-right: 0;

            width: 15%;
          }

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            display: block;
            width: 100%;
          }
        }
      }
    }

    // _________________________________
    // Modifiers
    &.${TableRowListingClassName}--team-table {
      .${TableListingClassName}__rows-data {
        .${TableListingClassName}__row {

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            display: block;
          }

          &--headers {
            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              display: none;
            }
          }

          .${TableListingClassName}__item {
            width: calc(100% / var(--${TableListingClassName}__table-columns));

            padding-right: ${Root.Size};

            flex: 1;

            &[data-table-col="web"] {
              width: 80px;

              flex: unset;

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                position: absolute;

                right: 0;
                top: 1em;

                width: unset;

                padding-right: 0;
              }
            }

            &[data-table-col="role"],
            &[data-table-col="contact"] {
              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                font-weight: 400;
              }
            }

            // __________________________
            // Temporary
            &:first-child {
              width: calc(
                100% / var(--${TableListingClassName}__table-columns)
              );

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                width: 100%;
              }
            }

            &:last-child {
              text-align: right;
              padding-right: 0;

              width: calc(
                100% / var(--${TableListingClassName}__table-columns)
              );

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                width: 100%;
                
                text-align: left;
              }
            }

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              width: 100%;
            }
          }
        }
      }
    }

    &.${TableRowListingClassName}--tools-table {
      .${TableListingClassName}__rows-data {
        .${TableListingClassName}__row {
          .${TableListingClassName}__item {
            width: calc(100% / var(--${TableListingClassName}__table-columns));

            padding-right: ${Root.Size};

            flex: 1;

            &[data-table-col="web"] {
              width: 80px;

              flex: unset;
            }

            // __________________________
            // Temporary
            &:first-child {
              width: calc(
                100% / var(--${TableListingClassName}__table-columns)
              );
            }

            &:last-child {
              text-align: right;
              padding-right: 0;

              width: calc(
                100% / var(--${TableListingClassName}__table-columns)
              );
            }
          }
        }
      }
    }

    &.${TableListingClassName}--has-sidebar {
      .${TableListingClassName}__col {
        &--table-name {
          width: calc(
            (100% / 3) -
              ((${Root.Grid.Gutter.Right} / 2) + (${CssFrameBorderWidth} * -2))
          );
          min-width: calc(
            (100% / 3) -
              ((${Root.Grid.Gutter.Right} / 2) + (${CssFrameBorderWidth} * -2))
          );
          flex-shrink: 0;
        }
      }
    }
  }
`;
