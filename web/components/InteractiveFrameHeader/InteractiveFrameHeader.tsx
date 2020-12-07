// Core
import React, { Component, MouseEventHandler } from "react";

// Types
import { NextRouter } from "next/router";

// Constants
import { __DEBUG__ } from "../../constants/site/Settings";

// Components
import Link from "next/link";
import { LayeredSidebar } from "../LayeredSidebar";
import { ThemePicker } from "../ThemePicker";

// Styles
import {
  InteractiveEyeballClassName,
  InteractiveEyeballStyle,
  InteractiveFillBarsClassName,
  InteractiveFillBarsStyle,
  InteractiveFrameHeaderClassName,
  InteractiveFrameHeaderStyle,
  InteractiveLogotypeClassName,
  InteractiveLogotypeStyle,
  InteractiveOverlayNavigationClassName,
  InteractiveOverlayNavigationStyle,
} from "./styles.scss";
import { LayeredSidebarClassName } from "../LayeredSidebar/styles.scss";
import { createGlobalStyle } from "styled-components";

// Begin Types
// __________________________________________________________________________________________

type LXLT_InteractiveFrameHeader_State = {
  isInactive?: boolean;
  isFillBarsExpanded?: boolean;
  isOverlayVisible?: boolean;
  isSidebarVisible?: boolean;
  isLogotypeExpanded?: boolean;

  router?: NextRouter;
};

type LXLT_InteractiveFrameHeader = {
  router?: NextRouter;
};

type LXLT_InteractiveFrameHeaderDisplay = LXLT_InteractiveFrameHeader_State & {
  toggleOverlayAndFillBarsExpansion?: () => void;
  toggleOverlayAndLogotypeExpansion?: () => void;
};

type LXLT_InteractiveFrameItem = {
  label: string;
  href?: string;
};

type LXLT_InteractiveOverlayNavigationItem = {
  label: string;
  href: string;
  caption?: string;
};

type LXLT_InteractiveOverlayNavigation = {
  addClass?: string;
  toggleOverlayAndLogotypeExpansion?: () => void;
};

type LXLT_InteractiveEyeball_State = {
  mouseX: number;
  mouseY: number;

  scrollX: number;
  scrollY: number;

  pupilWidth: number;
  pupilHeight: number;

  pupilOffsetX: number;
  pupilOffsetY: number;

  rotation: number;
};

type LXLT_InteractiveEyeball = {
  addClass?: string;
};

// Begin Data
// __________________________________________________________________________________________

const FrameItems = () => {
  let items: LXLT_InteractiveFrameItem[] = [
    {
      label: "Studio",
      href: "/sample",
    },
    {
      label: "Art",
      href: "/sample",
    },
    {
      label: "Design",
      href: "/sample",
    },
    {
      label: "Strategy",
      href: "/sample",
    },
    {
      label: "Interactive",
      href: "/sample",
    },
    {
      label: "Murals",
      href: "/sample",
    },
    {
      label: "Code",
      href: "/sample",
    },
    {
      label: "Lab",
      href: "/sample",
    },
    {
      label: "Products",
      href: "/sample",
    },
    {
      label: "Music",
      href: "/sample",
    },
    {
      label: "Tattoo",
      href: "/sample",
    },
    {
      label: "Shop",
      href: "/sample",
    },
    {
      label: "Resources",
      href: "/sample",
    },
    {
      label: "Advice",
      href: "/sample",
    },
    {
      label: "Fonts",
      href: "/sample",
    },
    {
      label: "Contact",
      href: "/sample",
    },
  ];

  return (
    <div className={`${InteractiveFrameHeaderClassName}__marquee-container`}>
      <ul className={`${InteractiveFrameHeaderClassName}__frame-items`}>
        {items.map((item: LXLT_InteractiveFrameItem, idx: number) => {
          return (
            <li key={idx}>
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className={`${InteractiveFrameHeaderClassName}__frame-items`}>
        {items.map((item: LXLT_InteractiveFrameItem, idx: number) => {
          return (
            <li key={idx}>
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Begin Component
// _________________________________________________________________________________________

/**
 *
 * @name InteractiveFrameHeader
 *
 */
export class InteractiveFrameHeader extends Component<
  LXLT_InteractiveFrameHeader,
  LXLT_InteractiveFrameHeader_State
> {
  constructor(props: LXLT_InteractiveFrameHeader) {
    super(props);

    this.state = {
      isInactive: false,
      isFillBarsExpanded: false,
      isOverlayVisible: false,
      isSidebarVisible: false,
      isLogotypeExpanded: false,
    };

    this.listenToScroll = this.listenToScroll.bind(this);

    this.toggleLogotype = this.toggleLogotype.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggleFillBars = this.toggleFillBars.bind(this);

    this.toggleOverlayAndFillBarsExpansion = this.toggleOverlayAndFillBarsExpansion.bind(
      this
    );
    this.toggleOverlayAndLogotypeExpansion = this.toggleOverlayAndLogotypeExpansion.bind(
      this
    );
  }

  /**
   *
   * @name componentDidMount()
   *
   */
  componentDidMount() {
    if (typeof window) {
      window.addEventListener("scroll", this.listenToScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window) {
      window.removeEventListener("scroll", this.listenToScroll);
    }
  }

  toggleLogotype() {
    if (this.state.isLogotypeExpanded) {
      this.setState({
        isLogotypeExpanded: false,
      });
    } else {
      this.setState({
        isLogotypeExpanded: true,
      });
    }
  }

  toggleOverlay() {
    if (this.state.isOverlayVisible) {
      this.setState({
        isOverlayVisible: false,
      });

      return;
    } else {
      this.setState({
        isOverlayVisible: true,
      });

      return;
    }
  }

  toggleFillBars() {
    if (this.state.isFillBarsExpanded) {
      this.setState({
        isFillBarsExpanded: false,
      });

      return;
    } else {
      this.setState({
        isFillBarsExpanded: true,
      });

      return;
    }
  }

  toggleOverlayAndLogotypeExpansion() {
    if (this.state.isFillBarsExpanded) {
      this.toggleOverlay();
      this.toggleFillBars();
    } else {
      this.toggleLogotype();
      this.toggleOverlay();
    }

    return;
  }

  toggleOverlayAndFillBarsExpansion() {
    this.toggleFillBars();
    this.toggleOverlay();

    return;
  }

  listenToScroll() {
    if (typeof window && document) {
      const scrollPosition =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollPosition > 10) {
        this.setState({
          isInactive: true,
        });
      } else {
        this.setState({
          isInactive: false,
        });
      }
    }
  }

  render() {
    return (
      <InteractiveFrameHeaderDisplay
        router={this.props.router}
        isInactive={this.state.isInactive}
        isFillBarsExpanded={this.state.isFillBarsExpanded}
        isOverlayVisible={this.state.isOverlayVisible}
        isSidebarVisible={this.state.isSidebarVisible}
        isLogotypeExpanded={this.state.isLogotypeExpanded}
        toggleOverlayAndFillBarsExpansion={
          this.toggleOverlayAndFillBarsExpansion
        }
        toggleOverlayAndLogotypeExpansion={
          this.toggleOverlayAndLogotypeExpansion
        }
      />
    );
  }
}

/**
 *
 * @name InteractiveEyeball
 * @author Peter Laxalt
 *
 */
export class InteractiveEyeball extends Component<
  LXLT_InteractiveEyeball,
  LXLT_InteractiveEyeball_State
> {
  constructor(props: LXLT_InteractiveEyeball) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,

      scrollX: 0,
      scrollY: 0,

      pupilWidth: 0,
      pupilHeight: 0,

      pupilOffsetX: 0,
      pupilOffsetY: 0,

      rotation: 0,
    };

    this.handleMouseMovement = this.handleMouseMovement.bind(this);

    this.calculatePupilBoundaries = this.calculatePupilBoundaries.bind(this);
  }

  /**
   *
   * @name componentDidMount()
   *
   */
  componentDidMount() {
    if (typeof window && this.pupilRef) {
      this.calculatePupilBoundaries();

      window.addEventListener("mousemove", this.handleMouseMovement);
    } else {
      return;
    }
  }

  componentWillUnmount() {
    if (typeof window) {
      window.removeEventListener("mousemove", this.handleMouseMovement);
    }
  }

  calculatePupilBoundaries() {
    if (this.pupilRef.current) {
      let pupilClientRect = this.pupilRef.current.getBoundingClientRect();

      this.setState({
        pupilWidth: pupilClientRect.width,
        pupilHeight: pupilClientRect.height,

        pupilOffsetX: pupilClientRect.left,
        pupilOffsetY: pupilClientRect.top,
      });
    }
  }

  handleMouseMovement(e: MouseEvent) {
    if (e) {
      // let radians = Math.atan2(
      //   e.screenY - (this.state.pupilOffsetY - this.state.pupilHeight / 2),
      //   e.screenX - (this.state.pupilOffsetX - this.state.pupilWidth / 2)
      // );

      let scrollContainer = document.querySelector(
        `.${InteractiveOverlayNavigationClassName}`
      );

      let radians = Math.atan2(
        e.clientY +
          scrollContainer.scrollTop -
          (this.state.pupilOffsetY - this.state.pupilHeight / 2),
        e.clientX - (this.state.pupilOffsetX - this.state.pupilWidth / 2)
      );

      let angle = radians * (180 / Math.PI) - 15;

      this.setState({
        rotation: angle,
      });
    } else {
      return;
    }
  }

  pupilRef = React.createRef<HTMLSpanElement>();

  render() {
    // console.log(this.state);

    return (
      <InteractiveEyeballStyle
        className={`${InteractiveEyeballClassName} ${this.props.addClass}`}
      >
        <span className={`${InteractiveEyeballClassName}__outline`} />
        <span className={`${InteractiveEyeballClassName}__pupil-wrapper`}>
          <span
            ref={this.pupilRef}
            className={`${InteractiveEyeballClassName}__pupil`}
            style={{ transform: `rotate(${this.state.rotation}deg)` }}
          >
            <span className={`${InteractiveEyeballClassName}__pupil__el`} />
          </span>
        </span>
      </InteractiveEyeballStyle>
    );
  }
}

/**
 *
 * @name InteractiveOverlayNavigation
 * @author Peter Laxalt
 *
 */

const InteractiveOverlayNavigation: React.FunctionComponent<LXLT_InteractiveOverlayNavigation> = ({
  addClass,
  toggleOverlayAndLogotypeExpansion,
}) => {
  let navItems: LXLT_InteractiveOverlayNavigationItem[] = [
    {
      label: "Art",
      href: "/sample",
      caption: "Lorem ipsum",
    },
    {
      label: "Design",
      href: "/sample",
      caption: "Lorem ipsum",
    },
    {
      label: "Code",
      href: "/sample",
      caption: "Lorem ipsum",
    },
    {
      label: "Culture",
      href: "/sample",
      caption: "Lorem ipsum",
    },
    {
      label: "Learn",
      href: "/sample",
      caption: "Lorem ipsum",
    },
    {
      label: "Shop",
      href: "/sample",
      caption: "Lorem ipsum",
    },
    {
      label: "Studio",
      href: "/sample",
      caption: "Lorem ipsum",
    },
    {
      label: "Contact",
      href: "/sample",
      caption: "Lorem ipsum",
    },
  ];

  let socialItems: LXLT_InteractiveOverlayNavigationItem[] = [
    {
      label: "Dribbble",
      href: "/",
    },
    {
      label: "Github",
      href: "/",
    },
    {
      label: "Instagram",
      href: "/",
    },
    {
      label: "LinkedIn",
      href: "/",
    },
  ];

  const GlobalScrollLock = createGlobalStyle`
    body,
    html {
      overflow: hidden !important;
    }
  `;

  return (
    <>
      <GlobalScrollLock />
      <InteractiveOverlayNavigationStyle
        className={`${InteractiveOverlayNavigationClassName} ${addClass}`}
      >
        <div className={`${InteractiveOverlayNavigationClassName}__inner`}>
          {/* _______________________________________________ */}
          {/* Home Button */}
          <div
            className={`${InteractiveOverlayNavigationClassName}__oval-btn ${InteractiveOverlayNavigationClassName}__oval-btn--home`}
          >
            <Link href={`/`}>
              <a
                className={`${InteractiveOverlayNavigationClassName}__oval-btn__el`}
                onClick={() => toggleOverlayAndLogotypeExpansion()}
              >
                Home
              </a>
            </Link>
          </div>

          {/* _______________________________________________ */}
          {/* Close Button */}
          <div
            className={`${InteractiveOverlayNavigationClassName}__oval-btn ${InteractiveOverlayNavigationClassName}__oval-btn--close`}
            onClick={() => toggleOverlayAndLogotypeExpansion()}
          >
            <span
              className={`${InteractiveOverlayNavigationClassName}__oval-btn__el`}
            >
              Close
            </span>
          </div>

          {/* _______________________________________________ */}
          {/* Social Container */}
          <div className={`${InteractiveOverlayNavigationClassName}__social`}>
            <ul
              className={`${InteractiveOverlayNavigationClassName}__social__list`}
            >
              {/* _______________________________________________ */}
              {/* Subscribe Button */}
              <li
                className={`${InteractiveOverlayNavigationClassName}__social__list__item`}
              >
                <span
                  className={`${InteractiveOverlayNavigationClassName}__social__list__item__label ${InteractiveOverlayNavigationClassName}__social__list__item__label--anchor`}
                >
                  Subscribe
                </span>
              </li>

              {/* _______________________________________________ */}
              {/* Social List */}
              {socialItems.map(
                (item: LXLT_InteractiveOverlayNavigationItem, idx: number) => {
                  return (
                    <li
                      className={`${InteractiveOverlayNavigationClassName}__social__list__item`}
                    >
                      <Link href={item.href}>
                        <a
                          className={`${InteractiveOverlayNavigationClassName}__social__list__item__label ${InteractiveOverlayNavigationClassName}__social__list__item__label--anchor`}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>

            <ul
              className={`${InteractiveOverlayNavigationClassName}__social__minor-list`}
            >
              <li
                className={`${InteractiveOverlayNavigationClassName}__social__minor-list__item`}
              >
                Currently / Brooklyn, NYC
              </li>
              <li
                className={`${InteractiveOverlayNavigationClassName}__social__minor-list__item`}
              >
                Originally / Reno, Nevada
              </li>
            </ul>
          </div>

          {/* _______________________________________________ */}
          {/* Navigation List */}
          <ul className={`${InteractiveOverlayNavigationClassName}__nav-list`}>
            {navItems.map(
              (item: LXLT_InteractiveOverlayNavigationItem, idx: number) => {
                return (
                  <li
                    key={idx}
                    className={`${InteractiveOverlayNavigationClassName}__nav-list__item`}
                  >
                    <span
                      className={`${InteractiveOverlayNavigationClassName}__nav-list__item__eyeball`}
                    >
                      <InteractiveEyeball />
                    </span>
                    {/* _______________________________________________ */}
                    {/* Inner Item */}
                    <span
                      className={`${InteractiveOverlayNavigationClassName}__nav-list__item__overflow-wrapper`}
                    >
                      <span
                        className={`${InteractiveOverlayNavigationClassName}__nav-list__item__inner`}
                      >
                        <Link href={item.href}>
                          <a
                            className={`${InteractiveOverlayNavigationClassName}__nav-list__item__anchor`}
                            onClick={() => toggleOverlayAndLogotypeExpansion()}
                          >
                            <span
                              className={`${InteractiveOverlayNavigationClassName}__nav-list__item__anchor__indicator`}
                            />
                            <span
                              className={`${InteractiveOverlayNavigationClassName}__nav-list__item__anchor__label`}
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
      </InteractiveOverlayNavigationStyle>
    </>
  );
};

/**
 *
 * @name InteractiveFrameHeaderDisplay
 * @author Peter Laxalt
 *
 */
const InteractiveFrameHeaderDisplay: React.FunctionComponent<LXLT_InteractiveFrameHeaderDisplay> = ({
  isInactive,
  isFillBarsExpanded,
  isLogotypeExpanded,
  isOverlayVisible,

  toggleOverlayAndFillBarsExpansion,
  toggleOverlayAndLogotypeExpansion,

  router,
}) => {
  // console.log(router);

  let hasSidebar =
    router && router.pathname
      ? router.pathname.includes("sample")
        ? true
        : false
      : false;

  return (
    <>
      {/* ______________________________________________ */}
      {/* Frame itself */}
      <InteractiveFrameHeaderStyle
        className={`${InteractiveFrameHeaderClassName} ${InteractiveFrameHeaderClassName}--${
          isInactive || isOverlayVisible ? `inactive` : `active`
        } ${InteractiveFrameHeaderClassName}--${
          isFillBarsExpanded || isOverlayVisible
            ? `fill-bars-is-expanded`
            : `fill-bars-is-not-expanded`
        }`}
      >
        {/* ______________________________________________ */}
        {/* Inner Grid */}
        <div className={`${InteractiveFrameHeaderClassName}__inner`}>
          {/* ______________________________________________ */}
          {/* Frame */}
          <div className={`${InteractiveFrameHeaderClassName}__frame`}>
            {/* ______________________________________________ */}
            {/* Corner Actions */}

            <div
              className={`${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--top-left`}
            >
              <Link href="/">
                <a
                  className={`${InteractiveFrameHeaderClassName}__frame__corner-action__wrapper`}
                >
                  <span className="icon icon--brandmark">
                    <span className="icon--brandmark__el icon__el" />
                  </span>
                </a>
              </Link>
            </div>

            <div
              className={`${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--top-right`}
              onClick={() => toggleOverlayAndFillBarsExpansion()}
            >
              <span
                className={`${InteractiveFrameHeaderClassName}__frame__corner-action__wrapper`}
              >
                <span className="icon icon--menu">
                  <span className="icon--menu__el icon__el" />
                </span>
              </span>
            </div>
            <div
              className={`${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--bottom-left`}
            >
              <span
                className={`${InteractiveFrameHeaderClassName}__frame__corner-action__wrapper`}
              >
                <span className="icon icon--eye">
                  <span className="icon--eye__el icon__el" />
                </span>
              </span>
            </div>
            <div
              className={`${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--bottom-right`}
            >
              <span
                className={`${InteractiveFrameHeaderClassName}__frame__corner-action__wrapper`}
              >
                <span className="icon icon--star">
                  <span className="icon--star__el icon__el" />
                </span>
              </span>
            </div>

            {/* ______________________________________________ */}
            {/* Top and bottom (y-axis) items */}
            <div
              className={`${InteractiveFrameHeaderClassName}__frame__y-axis`}
            >
              <div
                className={`${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--top`}
              >
                <FrameItems />
                <ThemePicker />
              </div>
              <div
                className={`${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--bottom`}
              >
                <FrameItems />
              </div>
            </div>

            {/* ______________________________________________ */}
            {/* Left and right (x-axis) items */}
            <div
              className={`${InteractiveFrameHeaderClassName}__frame__x-axis`}
            >
              <div
                className={`${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--left`}
              >
                <FrameItems />
              </div>

              <div
                className={`${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--right`}
              >
                <FrameItems />
              </div>
            </div>
          </div>
        </div>
      </InteractiveFrameHeaderStyle>

      {/* ______________________________________________ */}
      {/* Overlay Content */}
      {isOverlayVisible ? (
        <InteractiveOverlayNavigation
          addClass={`${InteractiveOverlayNavigationClassName}--${
            isOverlayVisible ? `is-visible` : `is-hidden`
          }`}
          toggleOverlayAndLogotypeExpansion={toggleOverlayAndLogotypeExpansion}
        />
      ) : null}

      {/* ______________________________________________ */}
      {/* Logotype */}
      <InteractiveLogotypeStyle
        className={`${InteractiveLogotypeClassName} ${InteractiveLogotypeClassName}--${
          isInactive ? `inactive` : `active`
        } ${InteractiveLogotypeClassName}--${
          isLogotypeExpanded ? `is-expanded` : `is-not-expanded`
        } ${InteractiveLogotypeClassName}--${
          isFillBarsExpanded
            ? `fill-bars-is-expanded`
            : `fill-bars-is-not-expanded`
        }`}
      >
        <span className={`${InteractiveLogotypeClassName}__inner`}>
          <span
            className={`${InteractiveLogotypeClassName}__el`}
            onClick={() => toggleOverlayAndLogotypeExpansion()}
          >
            <span className={`${InteractiveLogotypeClassName}__el__label`}>
              LAXALT
            </span>
          </span>
        </span>
      </InteractiveLogotypeStyle>

      {/* ______________________________________________ */}
      {/* Overlay Fill Bars */}
      <InteractiveFillBarsStyle
        className={`${InteractiveFillBarsClassName} ${InteractiveFillBarsClassName}--${
          isInactive ? `inactive` : `active`
        } ${InteractiveFillBarsClassName}--${
          isFillBarsExpanded ? `is-expanded` : `is-not-expanded`
        }`}
      >
        {/* ______________________________________________ */}
        {/* Background Fill Bars */}
        <span
          className={`${InteractiveFillBarsClassName}__fill-bar ${InteractiveFillBarsClassName}__fill-bar--top`}
        />
        <span
          className={`${InteractiveFillBarsClassName}__fill-bar ${InteractiveFillBarsClassName}__fill-bar--right`}
        />
        <span
          className={`${InteractiveFillBarsClassName}__fill-bar ${InteractiveFillBarsClassName}__fill-bar--bottom`}
        />
        <span
          className={`${InteractiveFillBarsClassName}__fill-bar ${InteractiveFillBarsClassName}__fill-bar--left`}
        />
      </InteractiveFillBarsStyle>

      {/* ______________________________________________ */}
      {/* Sidebar */}
      {hasSidebar ? (
        <LayeredSidebar
          addClass={`${LayeredSidebarClassName}--${
            isInactive ? `frame-inactive` : `frame-active`
          }`}
        />
      ) : null}
    </>
  );
};

// End Component
// ______________________________________________________________________________
