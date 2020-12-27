// Core
import React, { Component } from "react";

// Types
import { NextRouter } from "next/router";

// Settings
import {
  LXLT_LinkItem,
  LXLT_LinkItemWithCaption,
  SiteNavigation,
  __DEBUG__,
} from "../../constants/site/Settings";

// Components
import Link from "next/link";
import { ThemePicker } from "../ThemePicker";
import { InteractiveOverlayNavigation } from "../InteractiveOverlayNavigation";

// Styles
import {
  InteractiveFillBarsClassName,
  InteractiveFillBarsStyle,
  MellowFrameHeaderClassName,
  MellowFrameHeaderStyle,
  InteractiveLogotypeClassName,
  InteractiveLogotypeStyle,
} from "./styles.scss";
import { InteractiveOverlayNavigationClassName } from "../InteractiveOverlayNavigation/styles.scss";

// Begin Types
// __________________________________________________________________________________________

type LXLT_MellowFrameHeader_State = {
  isInactive?: boolean;
  isFillBarsExpanded?: boolean;
  isOverlayVisible?: boolean;
  isSidebarVisible?: boolean;
  isLogotypeExpanded?: boolean;

  router?: NextRouter;
};

type LXLT_MellowFrameHeader = {
  router?: NextRouter;
};

type LXLT_MellowFrameHeaderDisplay = LXLT_MellowFrameHeader_State & {
  toggleOverlayAndFillBarsExpansion?: () => void;
  toggleOverlayAndLogotypeExpansion?: () => void;
};

// Begin Component
// _________________________________________________________________________________________

/**
 *
 * @name InteractiveFrameItemsDisplay
 *
 */
const InteractiveFrameItemsDisplay = () => {
  return (
    <div className={`${MellowFrameHeaderClassName}__marquee-container`}>
      <ul className={`${MellowFrameHeaderClassName}__frame-items`}>
        {SiteNavigation.FrameItems.map((item: LXLT_LinkItem, idx: number) => {
          return (
            <li key={idx}>
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className={`${MellowFrameHeaderClassName}__frame-items`}>
        {SiteNavigation.FrameItems.map((item: LXLT_LinkItem, idx: number) => {
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

/**
 *
 * @name MellowFrameHeader
 *
 */
export class MellowFrameHeader extends Component<
  LXLT_MellowFrameHeader,
  LXLT_MellowFrameHeader_State
> {
  constructor(props: LXLT_MellowFrameHeader) {
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
      <MellowFrameHeaderDisplay
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
 * @name MellowFrameHeaderDisplay
 *
 */
const MellowFrameHeaderDisplay: React.FunctionComponent<LXLT_MellowFrameHeaderDisplay> = ({
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
      <MellowFrameHeaderStyle
        className={`${MellowFrameHeaderClassName} ${MellowFrameHeaderClassName}--${
          isInactive || isOverlayVisible ? `inactive` : `active`
        } ${MellowFrameHeaderClassName}--${
          isFillBarsExpanded || isOverlayVisible
            ? `fill-bars-is-expanded`
            : `fill-bars-is-not-expanded`
        }`}
      >
        {/* ______________________________________________ */}
        {/* Inner Grid */}
        <div className={`${MellowFrameHeaderClassName}__inner`}>
          {/* ______________________________________________ */}
          {/* Frame */}
          <div className={`${MellowFrameHeaderClassName}__frame`}>
            {/* ____________________________________________________________________________________________ */}
            {/* Top Nav*/}
            <div
              className={`${MellowFrameHeaderClassName}__frame__nav ${MellowFrameHeaderClassName}__frame__nav--top`}
            >
              <div
                className={`${MellowFrameHeaderClassName}__frame__nav__inner`}
              >
                {/* ______________________________________________ */}
                {/* Left Content */}
                <div
                  className={`${MellowFrameHeaderClassName}__frame__nav__col ${MellowFrameHeaderClassName}__frame__nav__col--left`}
                >
                  <ul
                    className={`${MellowFrameHeaderClassName}__frame__nav__linklist`}
                  >
                    {SiteNavigation.OverlayNav.NavItems.map(
                      (item: LXLT_LinkItemWithCaption, idx: number) => {
                        return (
                          <li
                            key={idx}
                            className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item`}
                          >
                            <Link href={item.href}>
                              <a
                                className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item__el`}
                              >
                                {item.label}
                              </a>
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>

                {/* ______________________________________________ */}
                {/* Right Content */}
                <div
                  className={`${MellowFrameHeaderClassName}__frame__nav__col ${MellowFrameHeaderClassName}__frame__nav__col--right`}
                >
                  {/* ______________________________________________ */}
                  {/* Right Inner Column (Brandmark) */}
                  <div
                    className={`${MellowFrameHeaderClassName}__frame__nav__inner-col ${MellowFrameHeaderClassName}__frame__nav__inner-col--brandmark`}
                  >
                    <div
                      className={`${MellowFrameHeaderClassName}__frame__nav__brandmark`}
                    >
                      <Link href="/">
                        <a
                          className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item__el ${MellowFrameHeaderClassName}__frame__nav__brandmark__label`}
                        >
                          Studio Laxalt
                        </a>
                      </Link>
                    </div>
                  </div>

                  {/* ______________________________________________ */}
                  {/* Right Inner Column (Misc) */}
                  <div
                    className={`${MellowFrameHeaderClassName}__frame__nav__inner-col ${MellowFrameHeaderClassName}__frame__nav__inner-col--misc ${MellowFrameHeaderClassName}__frame__nav__misc-wrapper`}
                  >
                    <div
                      className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item ${MellowFrameHeaderClassName}__frame__nav__misc-wrapper__el`}
                    >
                      <Link href="/sample">
                        <a
                          className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item__el`}
                        >
                          Misc
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ____________________________________________________________________________________________ */}
            {/* Bottom Nav*/}
            <div
              className={`${MellowFrameHeaderClassName}__frame__nav ${MellowFrameHeaderClassName}__frame__nav--bottom`}
            >
              <div
                className={`${MellowFrameHeaderClassName}__frame__nav__inner`}
              >
                {/* ______________________________________________ */}
                {/* Left Content */}
                <div
                  className={`${MellowFrameHeaderClassName}__frame__nav__col ${MellowFrameHeaderClassName}__frame__nav__col--time ${MellowFrameHeaderClassName}__frame__nav__col--left`}
                >
                  <ul
                    className={`${MellowFrameHeaderClassName}__frame__nav__linklist`}
                  >
                    <li
                      className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item`}
                    >
                      <span
                        className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item__time`}
                      >
                        NYC / 04:21:21
                      </span>
                    </li>

                    <li
                      className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item`}
                    >
                      <span
                        className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item__time`}
                      >
                        São Paulo / 04:21:21
                      </span>
                    </li>

                    <li
                      className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item`}
                    >
                      <span
                        className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item__time`}
                      >
                        San Francisco / 04:21:21
                      </span>
                    </li>
                  </ul>
                </div>

                {/* ______________________________________________ */}
                {/* Right Content */}
                <div
                  className={`${MellowFrameHeaderClassName}__frame__nav__col ${MellowFrameHeaderClassName}__frame__nav__col--contact ${MellowFrameHeaderClassName}__frame__nav__col--right`}
                >
                  <div
                    className={`${MellowFrameHeaderClassName}__frame__nav__inner-col ${MellowFrameHeaderClassName}__frame__nav__inner-col--theme-picker`}
                  >
                    <ThemePicker />
                  </div>

                  <div
                    className={`${MellowFrameHeaderClassName}__frame__nav__inner-col ${MellowFrameHeaderClassName}__frame__nav__inner-col--contact-btn`}
                  >
                    <Link href="/sample">
                      <a
                        className={`${MellowFrameHeaderClassName}__frame__nav__linklist__item__el ${MellowFrameHeaderClassName}__frame__nav__linklist__item__el--contact-btn`}
                      >
                        Contact
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MellowFrameHeaderStyle>

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
      {/* Logotype / Top */}
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
            <svg
              className={`${InteractiveLogotypeClassName}__el__circle`}
            >
              <circle
                cx="50%"
                cy="50%"
                r="50%"
              />
            </svg>
            <span className={`${InteractiveLogotypeClassName}__el__icon`}>
              <span
                className={`${InteractiveLogotypeClassName}__el__icon__diagonal ${InteractiveLogotypeClassName}__el__icon__diagonal--down`}
              />
              <span
                className={`${InteractiveLogotypeClassName}__el__icon__diagonal ${InteractiveLogotypeClassName}__el__icon__diagonal--up`}
              />
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
    </>
  );
};

// End Component
// ______________________________________________________________________________