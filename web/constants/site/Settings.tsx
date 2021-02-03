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
import {
  LXLT_Section_TableColumnField,
  LXLT_Section_TableColumnListing,
} from "../../components/Sections/TableListings";
import { LXLT_Section_TableRowField } from "../../components/Sections/TableListings/TableRowListings";
import { LXLT_TakeoutMenuColumn } from "../../components/Sections/TakeoutMenu";
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
  isMajor?: boolean;
  subcategories?: {
    name: string;
    slug: string;
  }[];
};

export type LXLT_SiteDataGraph = {
  rootSlug: string;
  categories: LXLT_Category[];
};

export type LXLT_Project = {
  name: string;
  slug: string;
  type: string;
  parentSlug: "design" | "code" | "artwork";

  cover: string;

  location?: string;
  duration?: string;
  agency?: string;
  partner?: string;

  categories: LXLT_Category[];

  description?: {
    headline: string;
    body: string;
    badge?: string;
  }

  meta?: {
    awards?: {
      info?: string;
      items?: {
        name: string;
        provider: string;
        year?: string;
      }[];
    }

    team?: {
      info?: string;
      people?: {
        name: string;
        role: string;
        web?: string;
        email?: string;
      }[];
    }
  }
};

export type LXLT_SiteProjects = LXLT_Project[];

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Settings = {
  siteTitle: "LAXALT STUDIO",
  siteTitleShort: "LAXALT",
  siteDescription: "Studio Laxalt.",
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
    slug: "localyyz",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/5058990/localyyz-anim-render-loop.gif",
    categories: [
      {
        name: "UI",
        slug: "ui",
      },
      {
        name: "UX",
        slug: "ux",
      },
    ],
    type: "Project",
    parentSlug: "design",
    location: "San Francisco, CA",
    duration: "2016 - Present",
  },
  {
    name: "Allships Will Rise",
    slug: "allships",
    cover:
      "/projects/allships/huge.png",
    categories: [
      {
        name: "Illustration",
        slug: "illustration",
      },
      {
        name: "Music",
        slug: "music",
      },
    ],
    type: "Project",
    parentSlug: "design",
    location: "Brooklyn, NY",
    duration: "2019",
    agency: "Laxalt & McIver",
    partner: "Allships",
  },
  {
    name: "Nonvector",
    slug: "nonvector",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/6860552/nv-9_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "Illustration",
        slug: "illustration",
      },
      {
        name: "Music",
        slug: "music",
      },
    ],
    type: "Project",
    parentSlug: "design",
    location: "Los Angeles, CA",
    duration: "2019",
  },
  {
    name: "Communion",
    slug: "communion",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/5917614/csf-containers_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "Illustration",
        slug: "illustration",
      },
      {
        name: "Music",
        slug: "music",
      },
    ],
    type: "Project",
    parentSlug: "design",
    location: "Los Angeles, CA",
    duration: "2019",
  },
  {
    name: "Dribbble",
    slug: "dribbble",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/6247770/drib-snakepin-dribbbb_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "Illustration",
        slug: "illustration",
      },
      {
        name: "Music",
        slug: "music",
      },
    ],
    type: "Project",
    parentSlug: "design",
    location: "Los Angeles, CA",
    duration: "2019",
  },

  // ______________________________________________________________________________________________________________________________________________________________
  {
    name: "Craftlog",
    slug: "craftlog",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/5840854/craftlogogogo-dribbb_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "UI",
        slug: "ui",
      },
      {
        name: "UX",
        slug: "ux",
      },
    ],
    type: "Project",
    parentSlug: "design",
    location: "San Francisco, CA",
    duration: "2016 - Present",
  },
  {
    name: "Deso",
    slug: "deso",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/5917586/deso-full-sheet_4x.jpg?compress=1&resize=1000x750",
    categories: [
      {
        name: "Illustration",
        slug: "illustration",
      },
      {
        name: "Music",
        slug: "music",
      },
    ],
    type: "Project",
    parentSlug: "design",
    location: "Los Angeles, CA",
    duration: "2019",
  },
  {
    name: "Eight Sleep",
    slug: "eight",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/4179206/alarm-interact-drib.gif",
    categories: [
      {
        name: "UI",
        slug: "ui",
      },
      {
        name: "UX",
        slug: "ux",
      },
    ],
    type: "Project",
    parentSlug: "design",
    location: "Los Angeles, CA",
    duration: "2019",
  },
  {
    name: "Full Spectrum Hemp",
    slug: "dribbble",
    cover:
      "https://cdn.dribbble.com/users/221507/screenshots/14085110/media/8a7b13906dc241f63f4d21dcf8988f24.png?compress=1&resize=1000x750",
    categories: [
      {
        name: "Packaging",
        slug: "packaging",
      },
      {
        name: "Music",
        slug: "music",
      },
    ],
    type: "Project",
    parentSlug: "design",
    location: "Los Angeles, CA",
    duration: "2019",
  },
];

export const getProjectData = (slug: string) => {
  return SiteProjects.filter(
    (project: LXLT_Project) => project.slug === slug
  )[0];
};

export const SiteNavigation: LXLT_SiteNavigation = {
  FrameItems: [
    {
      label: "Studio",
      href: "/sample",
    },
    {
      label: "Artwork",
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
        label: "Artwork",
        href: "/artwork",
        caption: "Lorem ipsum",
      },
      {
        label: "Design",
        href: "/design",
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
      // {
      //   label: "Thoughts",
      //   href: "/thoughts",
      //   caption: "Lorem ipsum",
      // },
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

export const SiteDesignGraph: LXLT_SiteDataGraph = {
  rootSlug: "design",
  categories: [
    {
      name: "Everything",
      slug: "everything",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Identity",
      slug: "identity",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Branding",
      slug: "branding",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Illustration",
      slug: "illustration",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Strategy",
      slug: "strategy",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Digital",
      slug: "digital",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Physical Spaces",
      slug: "physical-spaces",
      isMajor: false,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Lettering",
      slug: "lettering",
      isMajor: false,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Packaging",
      slug: "packaging",
      isMajor: false,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Misc",
      slug: "misc",
      isMajor: false,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
  ],
};

export const SiteCodeGraph: LXLT_SiteDataGraph = {
  rootSlug: "code",
  categories: [
    {
      name: "Everything",
      slug: "everything",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Frontend",
      slug: "frontend",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Headless",
      slug: "headless",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "eCommerce",
      slug: "eCommerce",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Interactive",
      slug: "interactive",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Experiments",
      slug: "experiments",
      isMajor: false,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
  ],
};

export const SiteArtworkGraph: LXLT_SiteDataGraph = {
  rootSlug: "artwork",
  categories: [
    {
      name: "Everything",
      slug: "everything",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Flash Sheets",
      slug: "flash",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Acrylic",
      slug: "acrylic",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Murals",
      slug: "murals",
      isMajor: true,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
    {
      name: "Archives",
      slug: "archives",
      isMajor: false,
      subcategories: [
        {
          name: "",
          slug: "",
        },
      ],
    },
  ],
};

export const SiteTakeoutMenu: LXLT_TakeoutMenuColumn[] = [
  {
    name: "Design",
    id: "D",
    items: [
      {
        label: "Art Direction",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Branding & Identity",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "UI & UX",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Illustration",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Creative Direction",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Type Design",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Environmental",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Sustainable",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Installations",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Naming",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Packaging",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Textiles",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Web Design",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "App Design",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Linework",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Print Design",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Iconography",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Wayfinding",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Event Design",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Hand Lettering",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Design Systems",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Design Language",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Motion Graphics",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Social Media Strategy",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Email Design",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Communication Design",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Font Development",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Non-Germanic Alphabets",
        price: "$4.20",
        spicy: false,
      },
    ],
  },

  {
    name: "Strategy",
    id: "S",
    items: [
      {
        label: "Positioning",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Advancement",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Business",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Brand",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Creative",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "SEO",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Growth Hacking",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Growth",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Adaptations",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Transformations",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Start-ups",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Cultural Identity",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Activation",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Innovation",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Language",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Sustainability",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Technical",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Investment",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "M&A",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Technical",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Team Management",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Project Management",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Leadership",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Operations",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Operations",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Global Presence",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Multilingual Businesses",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Carbon Negative Efforts",
        price: "$4.20",
        spicy: false,
      },
    ],
  },

  {
    name: "Development",
    id: "E",
    items: [
      {
        label: "Frontend",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Web",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "WebGL",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "GLSL",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "eCommerce",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Jamstack",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Headless CMS",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "React.js",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Vue.js",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Marko.js",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Next.js",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Gatsby.js",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Three.js",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Canvas API",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Accessibility",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Internationalization",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Shopify",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "BigCommerce",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Wordpress",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Barba.js",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Styled Components",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Trigonometry",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Performance",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Marketing",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "MongoDB",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "ApolloDB",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "MariaDB",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "AWS",
        price: "$4.20",
        spicy: false,
      },
    ],
  },

  {
    name: "Likes",
    id: "L",
    items: [
      {
        label: "Keep it Simple Stupid (K.I.S.S.)",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "The band Kiss",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Performance",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Speed",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Accessibility",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Longevity",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Flexibility",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Authenticity",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Expression",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Having Fun",
        price: "$4.20",
        spicy: false,
      },
    ],
  },

  {
    name: "Peeves",
    id: "P",
    items: [
      {
        label: "Acronyms (K.I.S.S.)",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Sound of Smacking Lips",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Pidgeonholes",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Overworking",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Taking things too seriously",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Not having your own take",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Freshly clipped nails",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Sunburns",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Too much cream cheese",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Asking to toast a bagel",
        price: "$4.20",
        spicy: false,
      },
    ],
  },

  {
    name: "Platforms",
    id: "H",
    items: [
      {
        label: "Print",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Web",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "iOS",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Android",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Physical Spaces",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Apple TV",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Apple Watch",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Browser Extensions",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Hardware",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Custom Interfaces",
        price: "$4.20",
        spicy: false,
      },
    ],
  },

  {
    name: "Side Orders",
    id: "S",
    isAlternateRow: true,
    items: [
      {
        label: "Tattoo",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Rock & Roll",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Skateboarding",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Old Grumpy Dog",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Graffiti",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Backpacking",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Paint Stains",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Hitch Hicking",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Music",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Layers",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Rainbow Wheel O' Death",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Dollar Slices",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Dumplings",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Cast Iron Anything",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "Bolo Ties",
        price: "$4.20",
        spicy: false,
      },
      {
        label: "John Prine",
        price: "$4.20",
        spicy: false,
      },
    ],
  },
];

export const SiteIndustries: LXLT_Section_TableColumnField[] = [
  { label: "HOSPITALITY" },
  { label: "ECOMMERCE" },
  { label: "FOOD & BEVERAGE" },
  { label: "ENTERTAINMENT" },
  { label: "COFFEE" },
  { label: "CANNABIS" },
  { label: "FASHION" },
  { label: "INTERIOR DESIGN" },
  { label: "MEDICAL" },
  { label: "TECHNOLOGY" },
  { label: "LIFESTYLE" },
  { label: "GROCERIES" },
  { label: "DELIVERY" },
  { label: "ALCOHOL" },
  { label: "ENVIRONMENTAL" },
  { label: "SOCIAL INITIATIVES" },
  { label: "JEWELRY" },
  { label: "SKATEBOARDING" },
  { label: "ENTREPRENEURSHIP" },
  { label: "SPORTS" },
  { label: "MAKERS SPACES" },
  { label: "BAKING" },
  { label: "MUSIC FESTIVALS" },
  { label: "BIOTECH" },
];

export const SiteClients: LXLT_Section_TableColumnField[] = [
  { label: "PATAGONIA" },
  { label: "PATAGONIA SURF" },
  { label: "MARIOTT" },
  { label: "HILTON" },
  { label: "NASA" },
  { label: "WEST ELM" },
  { label: "YELP" },
  { label: "DRIBBBLE" },
  { label: "AMAZON" },
  { label: "SAFEWAY" },
  { label: "COOKPAD" },
  { label: "AIGA" },
  { label: "AAF" },
  { label: "MOMENT SKIS" },
  { label: "SQUAW VALLEY" },
  { label: "UNIVERSITY OF NEVADA, RENO" },
  { label: "EDIBLE" },
  { label: "COVERED" },
  { label: "ALLTHECOOKS" },
  { label: "EIGHT SLEEP" },
];

export const SiteCollaborators: LXLT_Section_TableColumnField[] = [
  { label: "SHOPIFY" },
  { label: "DRIBBBLE" },
  { label: "NCET" },
  { label: "AAF RENO" },
  { label: "AIGA RENO TAHOE" },
  { label: "RENO COLLECTIVE" },
  { label: "ICRAVE" },
  { label: "DANNY FORSTER & ARCHITECTURE" },
  { label: "NOBLE STUDIOS" },
  { label: "SUTTERMADE" },
  { label: "KPS3" },
  { label: "BENCHMARK MERCHANDISING" },
  { label: "TAKING BACK SUNDAY" },
  { label: "ACCEPTANCE" },
  { label: "THE FRAY " },
  { label: "KILLSWITCH ENGAGE" },
  { label: "LOS LOBOS" },
  { label: "GD USA" },
  { label: "SKILLSUSA" },
];

export const SiteAwardHeaders: string[] = ["Award", "Project", "Team", "Year"];

export const SiteAwards: LXLT_Section_TableRowField[] = [
  {
    fields: [
      "Google Play Store: Editor's Choice Best Of",
      "Craftlog",
      "Laxalt & McIver",
      "2018",
    ],
  },
  {
    fields: [
      "Shopify Commerce Awards: Best Storytelling Through UX",
      "Coffeebar",
      "Laxalt & McIver",
      "2017",
    ],
  },
  {
    fields: [
      "Shopify App Store: Editor's Choice Featured Apps",
      "Localyyz",
      "Laxalt & McIver",
      "2018",
    ],
  },
  {
    fields: [
      "GDUSA Web Awards: Gold Medal",
      "Honey & Goldies",
      "Laxalt & McIver",
      "2019",
    ],
  },
  {
    fields: [
      "Dribbble: Featured Agency (The Art of Emotion)",
      "Laxalt & McIver",
      "Laxalt & McIver",
      "2020",
    ],
  },
  {
    fields: [
      "Dribbble: Talk Shop (Behind the Design)",
      "Personal",
      "Personal",
      "2020",
    ],
  },
  {
    fields: [
      "AIGA National Member Gallery Feature",
      "Remy & Max",
      "Laxalt & McIver",
      "2020",
    ],
  },
  {
    fields: [
      "Illustration On Food & Drinks Publication (2016)",
      "Indo Herbal Tonic",
      "Laxalt & McIver",
      "2020",
    ],
  },
  {
    fields: [
      "Nevada Distinguished Literacy Award",
      "Nevada State Literacy Plan",
      "Laxalt & McIver",
      "2020",
    ],
  },
  {
    fields: [
      "Goodtype Feature",
      "Nevada 150th Anniversary",
      "Personal",
      "2020",
    ],
  },
  {
    fields: [
      "Muse Creative Awards: Best Packaging Family",
      "Magpie Roasters Packaging",
      "Laxalt & McIver",
      "2020",
    ],
  },
  {
    fields: [
      "EDAWN Arts & Business Awards: Business of the Year, Microenterprise",
      "Laxalt & McIver",
      "Laxalt & McIver",
      "2020",
    ],
  },
  {
    fields: [
      "5+ AMA Ace Awards",
      "Various Projects",
      "Laxalt & McIver",
      "2020",
    ],
  },
  {
    fields: [
      "30+ AAF Regional ADDY Awards: Gold Medal",
      "Various Projects",
      "Laxalt & McIver",
      "2020",
    ],
  },
  {
    fields: [
      "30+ AAF Regional ADDY Awards: Silver Medal",
      "Various Projects",
      "Laxalt & McIver",
      "2020",
    ],
  },
];

/**
 *
 * @name __DEBUG__
 * @description Debug mode for console
 *
 */
export const __DEBUG__ = true;
