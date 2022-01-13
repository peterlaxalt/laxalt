// Core
import React, { Component } from "react";

// Types
import { NextRouter } from "next/router";

// Settings
import {
  LXLT_LinkItemWithCaption,
  Settings,
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
  FilterFrameHeaderClassName,
  FilterFrameHeaderStyle,
  InteractiveLogotypeClassName,
  InteractiveLogotypeStyle,
} from "./styles.scss";
import { InteractiveOverlayNavigationClassName } from "../InteractiveOverlayNavigation/styles.scss";
import { Base } from "../../constants/styles/Base";

// Begin Types
// __________________________________________________________________________________________

type LXLT_FilterFrameHeader_State = {
  isInactive?: boolean;
  isScrolled?: boolean;
  isFillBarsExpanded?: boolean;
  isOverlayVisible?: boolean;
  isSidebarVisible?: boolean;
  isLogotypeExpanded?: boolean;
  isTablet: boolean;

  router?: NextRouter;
};

type LXLT_FilterFrameHeader = {
  router?: NextRouter;
};

type LXLT_FilterFrameHeaderDisplay = LXLT_FilterFrameHeader_State & {
  toggleOverlayAndFillBarsExpansion?: () => void;
  toggleOverlayAndLogotypeExpansion?: () => void;
};

// Begin Component
// _________________________________________________________________________________________

/**
 *
 * @name FilterFrameHeader
 *
 */
export class FilterFrameHeader extends Component<
  LXLT_FilterFrameHeader,
  LXLT_FilterFrameHeader_State
> {
  constructor(props: LXLT_FilterFrameHeader) {
    super(props);

    this.state = {
      isInactive: true, // true
      isFillBarsExpanded: false, 
      isOverlayVisible: false, // false
      isScrolled: false,
      isSidebarVisible: false,
      isLogotypeExpanded: false, // false

      isTablet: false,
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

      console.log("this.props.router.pathname:", this.props.router.pathname);
      console.log(
        "this.props.router.pathname.includes('/and/'):",
        this.props.router.pathname.includes("/and/")
      );

      // if (this.props.router.pathname.includes("/and/")) {
      //   this.setState({
      //     isInactive: true,
      //   });
      // } else {
      //   this.setState({
      //     isInactive: false,
      //   });
      // }

      this.setState({
        isInactive: false,
        isTablet: window.innerWidth > Base.Media.Width.Md ? false : true
      });
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
          isScrolled: true
        });
      } else {
        this.setState({
          isInactive: false,
          isScrolled: false
        });
      }
    }
  }

  render() {
    return (
      <FilterFrameHeaderDisplay
        router={this.props.router}
        isTablet={this.state.isTablet}
        isInactive={this.state.isInactive}
        isScrolled={this.state.isScrolled}
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
 * @name FilterFrameHeaderDisplay
 *
 */
const FilterFrameHeaderDisplay: React.FunctionComponent<LXLT_FilterFrameHeaderDisplay> = ({
  isInactive,
  isFillBarsExpanded,
  isLogotypeExpanded,
  isOverlayVisible,
  isScrolled,
  isTablet,

  toggleOverlayAndFillBarsExpansion,
  toggleOverlayAndLogotypeExpansion,

  router,
}) => {
  // console.log(router);

  let isDynamicallyInactive = router.pathname.includes("/and/")
    ? true
    : isInactive;
  let currentRouteClass = router.pathname == "/" ? "route__home" : "";

  return (
    <>
      {/* ______________________________________________ */}
      {/* Frame itself */}
      <FilterFrameHeaderStyle
        className={`${FilterFrameHeaderClassName} ${FilterFrameHeaderClassName}--${
          isDynamicallyInactive || isOverlayVisible ? `inactive` : `active`
        } ${FilterFrameHeaderClassName}--${
          isFillBarsExpanded || isOverlayVisible
            ? `fill-bars-is-expanded`
            : `fill-bars-is-not-expanded`
        } ${FilterFrameHeaderClassName}--is-scrolled ${currentRouteClass}`}
      >
        {/* ______________________________________________ */}
        {/* Inner Grid */}
        <div className={`${FilterFrameHeaderClassName}__inner`}>
          {/* ______________________________________________ */}
          {/* Frame */}
          <div className={`${FilterFrameHeaderClassName}__frame`}>
            {/* ____________________________________________________________________________________________ */}
            {/* Top Nav*/}
            <div
              className={`${FilterFrameHeaderClassName}__frame__nav ${FilterFrameHeaderClassName}__frame__nav--top`}
            >
              <div
                className={`${FilterFrameHeaderClassName}__frame__nav__inner`}
              >
                {/* ______________________________________________
                {/* Right Content */}
                <div
                  className={`${FilterFrameHeaderClassName}__frame__nav__col ${FilterFrameHeaderClassName}__frame__nav__col--left`}
                >
                  {/* ______________________________________________ */}
                  {/* Right Inner Column (Brandmark) */}
                  <div
                    className={`${FilterFrameHeaderClassName}__frame__nav__inner-col ${FilterFrameHeaderClassName}__frame__nav__inner-col--brandmark`}
                  >
                    <div
                      className={`${FilterFrameHeaderClassName}__frame__nav__linklist`}
                    >
                      <Link href="/">
                        <a
                          className={`${FilterFrameHeaderClassName}__frame__nav__linklist__item__el ${FilterFrameHeaderClassName}__frame__nav__brandmark__label`}
                        >
                          Studio Laxalt
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className={`${FilterFrameHeaderClassName}__frame__nav__col ${FilterFrameHeaderClassName}__frame__nav__col--right`}
                >
                  {/* ______________________________________________ */}
                  {/* Right Inner Column (Nav) */}
                  <div
                    className={`${FilterFrameHeaderClassName}__frame__nav__inner-col ${FilterFrameHeaderClassName}__frame__nav__inner-col--brandmark`}
                  >
                    <div
                      className={`${FilterFrameHeaderClassName}__frame__nav__brandmark`}
                    >
                      <span
                        onClick={() => toggleOverlayAndLogotypeExpansion()}
                        className={`${FilterFrameHeaderClassName}__frame__nav__linklist__item__el ${FilterFrameHeaderClassName}__frame__nav__brandmark__label`}
                      >
                        {router.pathname == '/' ? '/work' : router.pathname}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`${FilterFrameHeaderClassName}__frame__nav__inner-col ${FilterFrameHeaderClassName}__frame__nav__inner-col--misc ${FilterFrameHeaderClassName}__frame__nav__misc-wrapper`}
                  >
                    <div
                      className={`${FilterFrameHeaderClassName}__frame__nav__tp`}
                    >
                      <ThemePicker />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ____________________________________________________________________________________________ */}
            {/* Bottom Nav*/}
            <div
              className={`${FilterFrameHeaderClassName}__frame__nav ${FilterFrameHeaderClassName}__frame__nav--bottom`}
            >
              <div
                className={`${FilterFrameHeaderClassName}__frame__nav__inner`}
              >
                {/* ______________________________________________ */}
                {/* Left Content */}
                <div
                  className={`${FilterFrameHeaderClassName}__frame__nav__col ${FilterFrameHeaderClassName}__frame__nav__col--time ${FilterFrameHeaderClassName}__frame__nav__col--left`}
                >
                  <ul
                    className={`${FilterFrameHeaderClassName}__frame__nav__linklist`}
                  >
                    <li
                      className={`${FilterFrameHeaderClassName}__frame__nav__linklist__item`}
                    >
                      <span
                        className={`${FilterFrameHeaderClassName}__frame__nav__linklist__item__time`}
                      >
                        NYC / 04:21:21
                      </span>
                    </li>

                    <li
                      className={`${FilterFrameHeaderClassName}__frame__nav__linklist__item`}
                    >
                      <span
                        className={`${FilterFrameHeaderClassName}__frame__nav__linklist__item__time`}
                      >
                        São Paulo / 04:21:21
                      </span>
                    </li>

                    <li
                      className={`${FilterFrameHeaderClassName}__frame__nav__linklist__item`}
                    >
                      <span
                        className={`${FilterFrameHeaderClassName}__frame__nav__linklist__item__time`}
                      >
                        San Francisco / 04:21:21
                      </span>
                    </li>
                  </ul>
                </div>

                {/* ______________________________________________ */}
                {/* Right Content */}
                <div
                  className={`${FilterFrameHeaderClassName}__frame__nav__col ${FilterFrameHeaderClassName}__frame__nav__col--contact ${FilterFrameHeaderClassName}__frame__nav__col--right`}
                >
                  <div
                    className={`${FilterFrameHeaderClassName}__frame__nav__inner-col ${FilterFrameHeaderClassName}__frame__nav__inner-col--theme-picker`}
                  >
                    <ThemePicker />
                  </div>

                  <div
                    className={`${FilterFrameHeaderClassName}__frame__nav__inner-col ${FilterFrameHeaderClassName}__frame__nav__inner-col--contact-btn`}
                  >
                    {/* <Link href={Settings.contactPage}> */}
                    <Link href="mailto: peter@laxa.lt">
                      <a
                        className={`${FilterFrameHeaderClassName}__frame__nav__linklist__item__el ${FilterFrameHeaderClassName}__frame__nav__linklist__item__el--contact-btn`}
                      >
                        Email
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FilterFrameHeaderStyle>

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
          isDynamicallyInactive ? `inactive` : `active`
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
            <svg className={`${InteractiveLogotypeClassName}__el__circle`}>
              <circle cx="50%" cy="50%" r="50%" />
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
    </>
  );
};

// End Component
// ______________________________________________________________________________
