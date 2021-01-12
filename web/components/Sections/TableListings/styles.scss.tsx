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
import {} from "../../../constants/styles/Animation";
import { Theme } from "../../../constants/Theme";

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

    .${TableListingClassName}__inner {
      display: flex;
      justify-content: space-between;

      padding-top: calc(${Root.Size} * 1);
    }

    .${TableListingClassName}__col {
      &--table-name {
        width: calc(100% / 3);
        min-width: calc(100% / 3);
        flex-shrink: 0;

        h3 {
          font-family: ${Theme.Font.Code};
          text-transform: uppercase;
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
      column-gap: 0;
    }

    .${TableListingClassName}__rows-data {
      .${TableListingClassName}__row {
        display: flex;

        justify-content: space-between;

        position: relative;

        padding-bottom: .5em;
        padding-top: .5em;

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
        }
      }
    }
  }
`;
