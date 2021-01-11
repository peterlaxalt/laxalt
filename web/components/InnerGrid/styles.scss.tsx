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
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const InnerGridStyle = styled.div`
  /* max-width: ${Theme.Base.Grid.SiteWidth}; */
  width: 100%;
  /* margin: 0 auto; */
  padding-left: ${Root.Grid.Gutter.Left};
  padding-right: ${Root.Grid.Gutter.Right};
  /* display: flex; */
  /* justify-content: space-between; */
`;
