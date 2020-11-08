/**
 *
 * /components/25/Pagination.tsx
 * @author Peter Laxalt
 * @description Pagination styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
// import { Theme } from "../../constants/Theme";
// import { Root } from "../../constants/Root";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const PaginationStyle = styled.div`
  position: fixed;
  left: 50px;
  right: 50px;
  bottom: 50px;
  z-index: 300;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-size: 0.8rem;

    li {
      margin-right: 10px;

      a {
        color: ${(props: any) => props.theme.textColor};
      }

      &.active {
        border-top: 1px solid ${(props: any) => props.theme.textColor};
      }

      &:last-child {
        margin-right: none;
      }
    }
  }
`;
