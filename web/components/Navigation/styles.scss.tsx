/**
 *
 * Navigation.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Navigation Styles.
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

let navFontSize = "60px";
let navGutter = "20px";
let navTransition = ".5s";

export const NavigationStyle = styled.nav`
  color: ${Root.Color.Mbm};
  mix-blend-mode: exclusion;
  transition: all ${navTransition} ease;
  position: fixed;
  z-index: 999;

  a {
    text-transform: uppercase;
    color: ${Root.Color.Mbm};
  }

  .top {
    display: flex;
    justify-content: space-between;

    .left,
    .right,
    .center {
      height: calc(${navFontSize} + 10px);
      top: 0;
      position: fixed;
    }

    .left {
      display: flex;
      flex-direction: column;
      left: 0;
      padding-left: calc(${navGutter} + 40px);
      text-transform: uppercase;
      justify-content: center;
      opacity: 0;
      transition: all ${navTransition} ease;

      figure {
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        left: ${navGutter};
        margin: 0;
        padding: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        border: 1px solid ${Theme.Color.White};

        &:before,
        &:after {
          content: "";
          position: absolute;
          border: 1px solid ${Theme.Color.White};
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
        }

        &:before {
          width: 20px;
          height: 20px;
          left: 3px;
        }

        &:after {
          width: 10px;
          height: 10px;
          left: 8px;
        }
      }

      span {
        &:first-child {
          font-weight: bold;
        }
        &:last-child {
          margin-top: 5px;
          font-size: 11px;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      left: 0;
      padding-left: ${Root.Grid.Gutter.Left};
      text-transform: uppercase;
      justify-content: center;
      opacity: 1;
      transition: all ${navTransition} ease;

      span {
        &:first-child {
          font-weight: bold;
        }
        &:last-child {
          font-size: 11px;
        }
      }
    }

    .center {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-size: ${navFontSize};
      text-transform: uppercase;
      font-weight: bold;
      left: 50%;
      height: calc(${navFontSize} + 30px);
      transform: translate(-50%, 0%);
      transition: all ${navTransition} ease;
    }
  }

  .sub {
    position: fixed;
    top: calc(${navFontSize} + 30px);
    left: 0;
    right: 0;
    transition: all ${navTransition} ease;
    padding-bottom: 40px;
  }

  .left-side,
  .right-side {
    position: fixed;
    top: 0;
    bottom: 0;
    width: ${navFontSize};
    display: flex;
    align-items: center;
    font-size: ${navFontSize};

    a {
      transform-origin: center center;
      line-height: ${navFontSize};
    }

    &.active {
      a {
        text-decoration: underline;
      }
    }
  }

  .left-side {
    left: 0;

    a {
      transition: all ${navTransition} ease;
      transform: rotate(-90deg) translateY(-80%);
    }
  }

  .right-side {
    right: 0;
    a {
      transition: all ${navTransition} ease;
      transform: rotate(90deg) translateY(170%);
    }
  }

  .bottom {
    .left,
    .right,
    .center {
      display: flex;
      height: calc(${navFontSize} + 14px);
      bottom: 0;
      position: fixed;
      font-size: ${navFontSize};
      text-transform: uppercase;
      align-items: center;
      text-transform: uppercase;
      width: 33.3333333%;
      transform-origin: center center;
      transition: all ${navTransition} ease;
    }

    .left {
      left: 0;
      padding-right: ${navGutter};
      transform: rotate(180deg) translate(0%, 0%);
      justify-content: flex-end;
    }

    .right {
      right: 0;
      padding-left: ${navGutter};
      transform: rotate(180deg) translate(0%, 0%);
      justify-content: flex-start;
    }

    .center {
      justify-content: center;
      left: 50%;
      transform: rotate(180deg) translate(50%, 0%);
    }
  }

  &.is-home {
    transition: all ${navTransition} ease;
    .top {
      .center,
      .left,
      .right {
        transition: all ${navTransition} ease;
      }
    }
  }

  &.is-not-home {
    .top {
      .center {
        transform: translate(-50%, -45%);
        transition: all ${navTransition} ease;
      }
      .left,
      .right {
        opacity: 0;
        transition: all ${navTransition} ease;
      }
      .sub {
        transform: translate(0%, -40px);
        transition: all ${navTransition} ease;
      }

      &:hover {
        .center {
          transform: translate(-50%, 0%);
          transition: all ${navTransition} ease;
        }
        .left,
        .right {
          opacity: 0;
          transition: all ${navTransition} ease;
        }
        .sub {
          transform: translate(0%, 0px);
          transition: all ${navTransition} ease;
        }
      }
    }

    .bottom {
      .left,
      .right {
        transform: rotate(180deg) translate(0%, -50%);
      }

      .center {
        transform: rotate(180deg) translate(50%, -50%);
      }

      .left,
      .right {
        transform: rotate(180deg) translate(0%, -50%);

        &:hover {
          transform: rotate(180deg) translate(0%, 0%);
        }
      }

      .center {
        transform: rotate(180deg) translate(50%, -50%);

        &:hover {
          transform: rotate(180deg) translate(50%, 0%);
        }
      }
    }

    .left-side {
      a {
        transform: rotate(-90deg) translateY(-140%);
      }

      &:hover {
        a {
          transform: rotate(-90deg) translateY(-80%);
        }
      }
    }

    .right-side {
      a {
        transform: rotate(90deg) translateY(110%);
      }

      &:hover {
        a {
          transform: rotate(90deg) translateY(170%);
        }
      }
    }
  }
`;
