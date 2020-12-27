/**
 *
 * index.js
 * @author Peter Laxalt
 * @description The website home page.
 *
 */

// Core
import { NextPage } from "next";
import React from "react";
import { LXLT_SidebarPane } from "../components/LayeredSidebar";
import { MarqueeRow } from "../components/Sections/MarqueeRow";
import { SimpleContentTemplate } from "../components/SimpleContentTemplate";
import { Root } from "../constants/Root";
import { Theme } from "../constants/Theme";

// Components
import WaterDistortWithCanvasTexturePage from "./projects/water-distort-with-canvas";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_LocationsFrontPage = {};

export const SamplePageClassName = "route__home-page";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const SamplePage: NextPage<LMNTS_LocationsFrontPage> = () => {
  let sidebarPanes: LXLT_SidebarPane[] = [
    {
      header: "Design",
      items: [
        {
          label: "Strategy",
          href: "/",
          isMajor: true,
        },
        {
          label: "Branding",
          href: "/",
          isMajor: true,
        },
        {
          label: "Illustration",
          href: "/",
          isMajor: true,
        },
        {
          label: "Packaging",
          href: "/",
          isMajor: true,
        },

        {
          label: "Creative Direction",
          href: "/",
          isMajor: false,
        },
        {
          label: "Linework",
          href: "/",
          isMajor: false,
        },
        {
          label: "Hospitality",
          href: "/",
          isMajor: false,
        },
      ],
    },

    {
      // header: "Pane 02",
      items: [
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
      ],
    },

    {
      // header: "Pane 02",
      items: [
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
      ],
    },
  ];

  return (
    <SimpleContentTemplate
      globalSidebarPanes={sidebarPanes}
      addClass={`${SamplePageClassName}`}
    >
      <MarqueeRow style={{ marginTop: 100 }} strings={["NONVECTOR"]} />

      <img
        src="https://cdn.dribbble.com/users/221507/screenshots/6860552/nv-9_4x.jpg?compress=1&resize=1000x750"
        style={{ width: "100%" }}
      />

      <p
        style={{
          maxWidth: 650,
          fontFamily: `${Theme.Font.Code}`,
          fontSize: "1.5rem",
          margin: "20px 0px 20px 0px",
        }}
      >
        <strong>APRIL 20 — </strong>Nunc fringilla leo vel ligula porttitor
        posuere in eget purus. Nam vitae bibendum sem. Suspendisse tempus,
        libero sed sodales cursus, quam quam euismod massa, a vestibulum lacus
        lacus ac leo. Proin sit amet est quam. Proin libero eros, interdum ut
        maximus ut, bibendum eu nulla. Aenean nunc augue, pulvinar dignissim
        sapien id, tempus lacinia neque. Mauris dignissim, urna nec blandit
        ullamcorper, elit ante tempus turpis, non consectetur orci diam eu
        lorem. Sed rutrum, leo tincidunt sagittis pharetra, quam diam fermentum
        libero, a ullamcorper massa velit non dolor. Maecenas eget pellentesque
        lacus. Sed ac lectus quis tellus euismod pharetra. Vivamus pretium
        gravida urna a posuere.
      </p>

      <p
        style={{
          maxWidth: 650,
          fontSize: "1.05rem",
          margin: "20px 0px 20px 0px",
        }}
      >
        Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae
        bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam
        euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam.
        Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean
        nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris
        dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non
        consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis
        pharetra, quam diam fermentum libero, a ullamcorper massa velit non
        dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus
        euismod pharetra. Vivamus pretium gravida urna a posuere.
      </p>

      <p
        style={{
          maxWidth: 650,
          fontSize: "1.05rem",
          margin: "20px 0px 20px 0px",
        }}
      >
        Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae
        bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam
        euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam.
        Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean
        nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris
        dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non
        consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis
        pharetra, quam diam fermentum libero, a ullamcorper massa velit non
        dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus
        euismod pharetra. Vivamus pretium gravida urna a posuere.
      </p>

      <p
        style={{
          maxWidth: 650,
          fontSize: "1.05rem",
          margin: "20px 0px 20px 0px",
        }}
      >
        Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae
        bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam
        euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam.
        Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean
        nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris
        dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non
        consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis
        pharetra, quam diam fermentum libero, a ullamcorper massa velit non
        dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus
        euismod pharetra. Vivamus pretium gravida urna a posuere.
      </p>
    </SimpleContentTemplate>
  );
};

export default SamplePage;
