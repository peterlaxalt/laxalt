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

// Styles
import { ListingsStyle, ListingStyle } from "./styles.scss";

// Constants
import { Theme } from "../../constants/Theme";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface Listing {
  name: string;
  href: string;
  theme: string;
  // width: string;
  thumb: string;
  categories: any;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

const projectsPrefix = "/projects";

const projects = [
  {
    name: "Test",
    href: projectsPrefix + "/p3",
    theme: Theme.Color.Primary,
    width: "40%",
    thumb: projectsPrefix + "/1.png",
    categories: ["code", "three.js", "p5.js", "trigonometry", "by me"]
  },
  {
    name: "Conic Sine",
    href: projectsPrefix + "/p2",
    theme: Theme.Color.Ocean,
    width: "50%",
    thumb: projectsPrefix + "/5.png",
    categories: ["code", "p5.js", "trigonometry", "experiments", "by me"]
  },
  {
    name: "Flow Sine",
    href: projectsPrefix + "/p3",
    theme: Theme.Color.Warning,
    width: "60%",
    thumb: projectsPrefix + "/2.png",
    categories: ["code", "three.js", "p5.js", "trigonometry", "by me"]
  },
  {
    name: "Test",
    href: projectsPrefix + "/p2",
    theme: Theme.Color.Dino,
    width: "50%",
    thumb: projectsPrefix + "/4.png",
    categories: ["code", "three.js", "p5.js", "trigonometry", "by me"]
  },
  {
    name: "Test",
    href: projectsPrefix + "/p1",
    theme: Theme.Color.Cream,
    width: "1",
    thumb: projectsPrefix + "/1.png",
    categories: ["code", "three.js", "p5.js", "trigonometry", "by me"]
  },
  {
    name: "Test",
    href: projectsPrefix + "/p2",
    theme: Theme.Color.Cream,
    width: "30%",
    thumb: projectsPrefix + "/2.png",
    categories: ["code", "three.js", "p5.js", "trigonometry", "by me"]
  }
];

const Listing = ({ name, href, theme, thumb, categories }: Listing) => (
  <Link href={href}>
    <ListingStyle className="listing" theme={theme}>
      <div className="listing-inner">
        <img src={thumb} alt={name} />
        <span className="listing-title">{name}</span>
        <span className="listing-categories">
          {categories.map((category: any, idx: number) => {
            return <span key={idx}>{category}</span>;
          })}
        </span>
      </div>
    </ListingStyle>
  </Link>
);

export const Listings = () => (
  <ListingsStyle>
    <div className="inner">
      {projects.map((project, idx) => {
        return (
          <Listing
            name={project.name}
            href={project.href}
            theme={project.theme}
            // width={project.width}
            thumb={project.thumb}
            categories={project.categories}
            key={idx}
          />
        );
      })}
    </div>
  </ListingsStyle>
);

// End Component
//////////////////////////////////////////////////////////////////////
