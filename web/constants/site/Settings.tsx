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

export type LXLT_Category = {
  name: string;
  slug: string;
};

export type LXLT_Project = {
  name: string;
  slug: string;
  cover: string;
  categories: LXLT_Category[];
  type: string;
  location?: string;
  duration?: string;
};

export type LXLT_SiteProjects = LXLT_Project[];

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

  contactPage: "/contact",
  miscPage: "/misc",
};

export const SiteProjects: LXLT_SiteProjects = [
  {
    name: "Localyyz",
    slug: "/projects/localyyz",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/5058990/localyyz-anim-render-loop.gif",
    categories: [
      {
        name: "UI",
        slug: "/browse/ui",
      },
      {
        name: "UX",
        slug: "/browse/ux",
      },
    ],
    type: "Project",
    location: "San Francisco, CA",
    duration: "2016 - Present",
  },
  {
    name: "Nonvector",
    slug: "/projects/nonvector",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/6860552/nv-9_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "Illustration",
        slug: "/browse/illustration",
      },
      {
        name: "Music",
        slug: "/browse/music",
      },
    ],
    type: "Project",
    location: "Los Angeles, CA",
    duration: "2019",
  },
  {
    name: "Communion",
    slug: "/projects/communion",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/5917614/csf-containers_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "Illustration",
        slug: "/browse/illustration",
      },
      {
        name: "Music",
        slug: "/browse/music",
      },
    ],
    type: "Project",
    location: "Los Angeles, CA",
    duration: "2019",
  },
  {
    name: "Dribbble",
    slug: "/projects/dribbble",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/6247770/drib-snakepin-dribbbb_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "Illustration",
        slug: "/browse/illustration",
      },
      {
        name: "Music",
        slug: "/browse/music",
      },
    ],
    type: "Project",
    location: "Los Angeles, CA",
    duration: "2019",
  },

  // ______________________________________________________________________________________________________________________________________________________________
  {
    name: "Craftlog",
    slug: "/projects/craftlog",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/5840854/craftlogogogo-dribbb_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "UI",
        slug: "/browse/ui",
      },
      {
        name: "UX",
        slug: "/browse/ux",
      },
    ],
    type: "Project",
    location: "San Francisco, CA",
    duration: "2016 - Present",
  },
  {
    name: "Deso",
    slug: "/projects/deso",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/5917586/deso-full-sheet_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "Illustration",
        slug: "/browse/illustration",
      },
      {
        name: "Music",
        slug: "/browse/music",
      },
    ],
    type: "Project",
    location: "Los Angeles, CA",
    duration: "2019",
  },
  {
    name: "Eight Sleep",
    slug: "/projects/eight",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/4179206/alarm-interact-drib.gif",
    categories: [
      {
        name: "UI",
        slug: "/browse/ui",
      },
      {
        name: "UX",
        slug: "/browse/ux",
      },
    ],
    type: "Project",
    location: "Los Angeles, CA",
    duration: "2019",
  },
  {
    name: "Full Spectrum Hemp",
    slug: "/projects/dribbble",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/14085110/media/8a7b13906dc241f63f4d21dcf8988f24.png?compress=1&resize=1000x750",
    categories: [
      {
        name: "Packaging",
        slug: "/browse/packaging",
      },
      {
        name: "Music",
        slug: "/browse/music",
      },
    ],
    type: "Project",
    location: "Los Angeles, CA",
    duration: "2019",
  },
];

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
        href: "/art",
        caption: "Lorem ipsum",
      },
      {
        label: "Design",
        href: "/sample",
        caption: "Lorem ipsum",
      },
      {
        label: "Code",
        href: "/code",
        caption: "Lorem ipsum",
      },
      {
        label: "Studio",
        href: "/studio",
        caption: "Lorem ipsum",
      },
      {
        label: "Thoughts",
        href: "/thoughts",
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
