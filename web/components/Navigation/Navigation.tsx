/**
 *
 * Navigation.js
 * @author Peter Laxalt
 * @description The website Navigation.
 *
 */

// Core
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import { InnerGrid } from "../InnerGrid/InnerGrid";

// Styles
import { NavigationStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

const subLinks = [
  {
    label: "Art",
    href: "/projects/art"
  },
  {
    label: "Design",
    href: "/projects/design"
  },
  {
    label: "Code",
    href: "/projects/code"
  },
  {
    label: "Tattoo Flash",
    href: "/projects/flash"
  },
  {
    label: "Photo",
    href: "/projects/photo"
  },
  {
    label: "Fonts",
    href: "/projects/fonts"
  },
  {
    label: "Music",
    href: "/projects/music"
  },
  {
    label: "Learn",
    href: "/projects/learn"
  },
  {
    label: "Thoughts",
    href: "/projects/thoughts"
  },
]

export const Navigation = () => {
  const router = useRouter();

  return (
    <NavigationStyle
      className={router.pathname === "/" ? "nav is-home" : "nav is-not-home"}
    >
      <div className="top">
        <div className="left">
          <figure />
          <span>Bushwick, Brooklyn, NYC</span>
          <span>Last Updated December 9th, 2019</span>
        </div>
        <div className="center">
          <Link href="/">Peter Francis Laxalt</Link>
        </div>

        <ul className="sub">
          <InnerGrid className="wrapper">
            {subLinks.map((link, idx) => {
              return (
                <li key={idx}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              )
            })}
          </InnerGrid>
        </ul>
      </div>

      

      <div
        className={router.pathname === "/" ? "left-side active" : "left-side"}
      >
        <Link href="/">Misc</Link>
      </div>

      <div
        className={
          router.pathname === "/about" ? "right-side active" : "right-side"
        }
      >
        <Link href="/about">About</Link>
      </div>

      <div className="bottom">
        <div className="left">
          <a href="https://dribbble.com/peterlaxalt" target="_blank">
            Dribbble
          </a>
        </div>
        <div className="center">
          <a href="mailto:pete@laxaltandmciver.co" target="_blank">
            Contact
          </a>
        </div>
        <div className="right">
          <a href="https://www.instagram.com/peterlaxalt/" target="_blank">
            Instagram
          </a>
        </div>
      </div>
    </NavigationStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
