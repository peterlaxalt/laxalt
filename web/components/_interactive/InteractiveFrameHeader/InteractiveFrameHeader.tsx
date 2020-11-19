// Core
import React from "react";

// Components
import { DharmaCounter } from "../DharmaCounter";

// Styles
import {
  InteractiveFrameHeaderClassName,
  InteractiveFrameHeaderStyle,
} from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

type LXLT_InteractiveFrameHeader = {};

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
      href: "/",
    },
    {
      label: "Art",
      href: "/",
    },
    {
      label: "Design",
      href: "/",
    },
    {
      label: "Strategy",
      href: "/",
    },
    {
      label: "Interactive",
      href: "/",
    },
    {
      label: "Murals",
      href: "/",
    },
    {
      label: "Code",
      href: "/",
    },
    {
      label: "Products",
      href: "/",
    },
    {
      label: "Music",
      href: "/",
    },
    {
      label: "Tattoo",
      href: "/",
    },
    {
      label: "eCommerce",
      href: "/",
    },
    {
      label: "Advice",
      href: "/",
    },
    {
      label: "Fonts",
      href: "/",
    },
  ];

  return (
    <div className={`${InteractiveFrameHeaderClassName}__marquee-container`}>
      <ul className={`${InteractiveFrameHeaderClassName}__frame-items`}>
        {items.map((item: LXLT_InteractiveFrameItem, idx: number) => {
          return <li key={idx}>{item.label}</li>;
        })}
      </ul>

      <ul className={`${InteractiveFrameHeaderClassName}__frame-items`}>
        {items.map((item: LXLT_InteractiveFrameItem, idx: number) => {
          return <li key={idx}>{item.label}</li>;
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
 * @author Peter Laxalt
 *
 */
export const InteractiveFrameHeader: React.FunctionComponent<LXLT_InteractiveFrameHeader> = () => (
  <InteractiveFrameHeaderStyle className={`${InteractiveFrameHeaderClassName}`}>
    {/* ______________________________________________ */}
    {/* Inner Grid */}
    <div className={`${InteractiveFrameHeaderClassName}__inner`}>
      {/* ______________________________________________ */}
      {/* Frame */}
      <div className={`${InteractiveFrameHeaderClassName}__frame`}>
        {/* ______________________________________________ */}
        {/* Top and bottom (y-axis) items */}
        <div className={`${InteractiveFrameHeaderClassName}__frame__y-axis`}>
          <div
            className={`${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--top`}
          >
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
        <div className={`${InteractiveFrameHeaderClassName}__frame__x-axis`}>
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

      {/* ______________________________________________ */}
      {/* Typeface */}
      <div className={`${InteractiveFrameHeaderClassName}__type`}>
        <DharmaCounter text="LAXALT" />
      </div>
    </div>
  </InteractiveFrameHeaderStyle>
);

// End Component
// ______________________________________________________________________________
