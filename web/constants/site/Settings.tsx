/**
 *
 * Settings.js
 * @author Peter Laxalt
 * @description This is the sitewide information that is used throughout the entire
 * build of the site. This goes from SEO to headings and also into the
 * core Gatsby config files as well.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////
import { Color } from "../styles/Color";

export type LXLT_LinkItem = {
  label: string;
  href?: string;
};

export type LXLT_LinkItemWithCaption = LXLT_LinkItem & {
  caption?: string;
};

export type LXLT_SiteNavigation = {
  FrameItems: LXLT_LinkItem[];
  OverlayNav: {
    SocialItems: LXLT_LinkItem[];
    NavItems: LXLT_LinkItemWithCaption[];
  };
};

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Settings = {
  siteTitle:
    "Play-Well TEKnologies | LEGO®-inspired engineering classes for kids & adults.",
  siteTitleShort: "Play-Well",
  siteDescription: "Kids are natural engineers. We help them realize it.",
  siteBaseKeywords:
    "lego, engineering, engineering, classes, summer, camps, spring, learning, learn, play, education, knowledge",
  siteUrl: "https://play-well-staging.netlify.com/",
  themeColor: Color.Primary,
  secondaryColor: Color.Secondary,
  backgroundColor: Color.Background,
  pathPrefix: "/",
  logo: "src/assets/images/icon.png",
  logoLight: "src/assets/images/icon.png",
  logoDark: "src/assets/images/icon.png",
  social: {
    twitter: "PlayWell_TEK",
    facebook: "PlayWellTEK",
    instagram: "playwellteknologies",
    fbAppId: "56639339020281",
  },
};

export const SiteNavigation: LXLT_SiteNavigation = {
  FrameItems: [
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
  ],
  OverlayNav: {
    NavItems: [
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
        label: "Studio",
        href: "/sample",
        caption: "Lorem ipsum",
      },
      {
        label: "Thoughts",
        href: "/sample",
        caption: "Lorem ipsum",
      },
      // {
      //   label: "Learn",
      //   href: "/sample",
      //   caption: "Lorem ipsum",
      // },
      // {
      //   label: "Shop",
      //   href: "/sample",
      //   caption: "Lorem ipsum",
      // },
      // {
      //   label: "Contact",
      //   href: "/sample",
      //   caption: "Lorem ipsum",
      // },
    ],
    SocialItems: [
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
    ],
  },
};

/**
 *
 * @name __DEBUG__
 * @description Debug mode for console
 *
 */
export const __DEBUG__ = true;
