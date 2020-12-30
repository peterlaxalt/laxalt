/**
 *
 * Footer.js
 * @author Peter Laxalt
 * @description The website footer.
 *
 */

// Core
import dynamic from "next/dynamic";
import Link from "next/link";
import { NextRouter } from "next/router";
import React, { Component, useEffect, useState } from "react";
import {
  LXLT_LinkItemWithCaption,
  SiteNavigation,
} from "../../constants/site/Settings";
import { LXLT_P5Wrapper } from "../../pages/projects/_scaffold-p5";
import { LXLT_GLSL_Canvas } from "../../sketches/p5/glsl";
import { OvalButton } from "../OvalButton";

// Styles
import { FooterClassName, FooterStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name P5Wrapper
 * @description Dynamic import of the P5 library
 *
 */
const P5Wrapper: LXLT_P5Wrapper = dynamic(import("react-p5-wrapper"), {
  loading: () => <></>,
  ssr: false,
});
class FooterP5Canvas extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0,

      canvasElement: false,
      canvasTheme: undefined,
      canvasParent: undefined,
    };

    this.renderP5 = this.renderP5.bind(this);
  }

  /**
   *
   * @name componentDidMount()
   * @description Lifecycle to start using the window & document
   *
   */
  componentDidMount() {
    if (typeof window) {
      this.setState({
        windowWidth: window.innerWidth - 80,
        windowHeight: window.innerHeight - 80,
        domLoaded: true,

        canvasElement: false,
      });

      // window.laxaltUniversalTheme = this.props.colorThemeContext;
    }
  }

  /**
   *
   * @name renderP5()
   * @description Fire up p5.js canvas through a dynamic import
   *
   */
  renderP5 = (filename: string) => {
    const sketch: LXLT_GLSL_Canvas = require(`../../sketches/p5/${filename}`).default(
      this.state.windowWidth,
      this.state.windowHeight,
      1,
      // this.state.canvasTheme,
      this.state.canvasParent
    );

    return <P5Wrapper sketch={sketch} />;
  };

  render() {
    return (
      <>
        <div className="__footer-canvas-container">
          {this.renderP5("footer-canvas")}
        </div>
      </>
    );
  }
}

export type LXLT_Footer = {
  router: NextRouter;
};

export const Footer: React.FunctionComponent<LXLT_Footer> = ({ router }) => {
  let scrollToTop: () => void;

  useEffect(() => {
    scrollToTop = function () {
      window.scrollTo(0, 0);
    };
  });

  let currentRouteClass = router.pathname == "/" ? "route__home" : "";

  return (
    <FooterStyle className={`${FooterClassName} ${currentRouteClass}`}>
      <div className={`${FooterClassName}__inner`}>
        {/* ____________________________________________________________ */}
        {/* Footer Canvas */}
        <div className={`${FooterClassName}__canvas`}>
          <FooterP5Canvas />
        </div>

        {/* ____________________________________________________________ */}
        {/* Footer Top */}
        <div className={`${FooterClassName}__top`}>
          {/* ____________________________________________________________ */}
          {/* Footer Top Column */}
          <div
            className={`${FooterClassName}__top__col ${FooterClassName}__top__col--one`}
          >
            {/* _______________________________________________ */}
            {/* Navigation List */}
            <ul className={`${FooterClassName}__nav-list`}>
              {SiteNavigation.OverlayNav.NavItems.map(
                (item: LXLT_LinkItemWithCaption, idx: number) => {
                  return (
                    <li
                      key={idx}
                      className={`${FooterClassName}__nav-list__item`}
                    >
                      {/* _______________________________________________ */}
                      {/* Inner Item */}
                      <span
                        className={`${FooterClassName}__nav-list__item__overflow-wrapper`}
                      >
                        <span
                          className={`${FooterClassName}__nav-list__item__inner`}
                        >
                          <Link href={item.href}>
                            <a
                              className={`${FooterClassName}__nav-list__item__anchor`}
                            >
                              <span
                                className={`${FooterClassName}__nav-list__item__anchor__indicator`}
                              />
                              <span
                                className={`${FooterClassName}__nav-list__item__anchor__label`}
                              >
                                {item.label}
                              </span>
                            </a>
                          </Link>
                        </span>
                      </span>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>

        {/* ____________________________________________________________ */}
        {/* Footer Bottom */}
        <div className={`${FooterClassName}__bottom`}>
          {/* ____________________________________________________________ */}
          {/* Footer Bottom Column */}
          <div
            className={`${FooterClassName}__bottom__col ${FooterClassName}__bottom__col--one`}
          >
            <span className={`${FooterClassName}__bottom__col__label`}>
              Currently / Brooklyn, NYC
            </span>
            <span className={`${FooterClassName}__bottom__col__label`}>
              Originally / Reno, Nevada
            </span>
          </div>

          {/* ____________________________________________________________ */}
          {/* Footer Bottom Column */}
          <div
            className={`${FooterClassName}__bottom__col ${FooterClassName}__bottom__col--two`}
          >
            <strong className={`${FooterClassName}__bottom__col__label`}>
              STUDIO LAXALT
            </strong>
            <span className={`${FooterClassName}__bottom__col__label`}>
              ©2020 ALL RIGHTS RESERVED
            </span>
          </div>

          {/* ____________________________________________________________ */}
          {/* Footer Bottom Column */}
          <div
            className={`${FooterClassName}__bottom__col ${FooterClassName}__bottom__col--three`}
            onClick={() => scrollToTop()}
          >
            <OvalButton
              label={`Back to top`}
              addClass={`${FooterClassName}__oval-btn`}
              invert={false}
            />
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
