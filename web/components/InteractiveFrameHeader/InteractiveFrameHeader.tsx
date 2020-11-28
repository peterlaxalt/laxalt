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
  InteractiveFrameHeaderClassName,
  InteractiveFrameHeaderStyle,
} from "./styles.scss";
import { LayeredSidebarClassName } from "../LayeredSidebar/styles.scss";

// Begin Types
// __________________________________________________________________________________________

type LXLT_InteractiveFrameHeaderDisplay = {
  isInactive?: boolean;
  isExpanded?: boolean;
  isOverlayVisible?: boolean;
  isSidebarVisible?: boolean;

  router?: NextRouter;

  eyeball?: {
    translateX: number;
    translateY: number;
  };
};

type LXLT_InteractiveFrameHeader = {
  router?: NextRouter;
};

type LXLT_InteractiveFrameHeader_State = LXLT_InteractiveFrameHeaderDisplay & {};

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
    };

    this.listenToScroll = this.listenToScroll.bind(this);
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
                <a>👁</a>
              </Link>
            </div>

            <div
              className={`${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--top-right`}
            >
              <Link href="/">
                <a>👁</a>
              </Link>
            </div>
            <div
              className={`${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--bottom-left`}
            >
              <Link href="/">
                <a>👁</a>
              </Link>
            </div>
            <div
              className={`${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--bottom-right`}
            >
              <Link href="/">
                <a>👁</a>
              </Link>
            </div>

            {/* ______________________________________________ */}
            {/* Top and bottom (y-axis) items */}
            <div
              className={`${InteractiveFrameHeaderClassName}__frame__y-axis`}
            >
              <div
                className={`${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--top`}
              >
                <ThemePicker />
                <FrameItems />
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
