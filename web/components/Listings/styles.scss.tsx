/**
 *
 * Listings.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Listings Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
// import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface Listing {
  width?: string;
  theme?: string;
}

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ListingsStyle = styled.div`
  .inner {
    width: 100%;
    padding-top: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-wrap: wrap;
    padding-bottom: 300px;

    a {
      text-decoration: none;
    }
  }
`;

export const ListingStyle = styled.a`
  display: flex;
  height: auto;
  cursor: pointer;
  opacity: 1;
  transition: all .25s ease;
  
  &:nth-child(odd) {
    width: 50%;
    padding: 0px 20px 40px 0px;
  }

  &:nth-child(even) {
    width: 50%;
    padding: 0px 0px 40px 20px;
  }

  .listing-inner {
    /* background-color: ${(props: Listing) => props.theme}; */
    line-height: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      line-height: 0;
    }

    .listing-title {
      font-weight: bold;
      margin-top: 20px;
    }

    .listing-title, .listing-categories {
      line-height: 1.2;
      display: flex;
      width: 100%; 
      justify-content: center;
      text-align: center;
      color: ${Root.Color.Mbm};
      font-size: 16px;
      mix-blend-mode: exclusion;
      text-decoration: none;
    }

    .listing-categories {
      span {
        font-size: 14px;
        margin-top: 5px;
        margin-right: 10px;
        position: relative;

        &:after {
          content: ',';
        }

        &:last-child {
          &:after {
            display: none;
          }
        }
      }
    }
  }
`;
