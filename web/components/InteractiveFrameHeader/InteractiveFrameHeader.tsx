// Core
import React, { Component } from "react";

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
  InteractiveFillBarsClassName,
  InteractiveFillBarsStyle,
  InteractiveFrameHeaderClassName,
  InteractiveFrameHeaderStyle,
  InteractiveLogotypeClassName,
  InteractiveLogotypeStyle,
} from "./styles.scss";
import { LayeredSidebarClassName } from "../LayeredSidebar/styles.scss";

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
 * @name InteractiveFrameHeaderDisplay
 * @author Peter Laxalt
 *
 */
const InteractiveFrameHeaderDisplay: React.FunctionComponent<LXLT_InteractiveFrameHeaderDisplay> = ({
  isInactive,
  isFillBarsExpanded,
  isLogotypeExpanded,

  toggleOverlayAndFillBarsExpansion,
  toggleOverlayAndLogotypeExpansion,

  router,
}) => {
  console.log(router);

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
          isInactive ? `inactive` : `active`
        } ${InteractiveFrameHeaderClassName}--${
          isFillBarsExpanded
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
