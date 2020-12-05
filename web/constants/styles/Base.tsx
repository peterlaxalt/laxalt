// Base.js:
// Core measurements throughout the app.

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface Base {
  // Core Base Measurement
  Size: {
    Lg: number;
    Md: number;
    Sm: number;
  };

  // Root Element Measurement
  Rem: {
    Lg: number;
    Md: number;
    Sm: number;
  };

  // Responsive Breakpoints
  Media: {
    Width: {
      Lg: number;
      Md: number;
      Sm: number;
    };
    Height: {
      Lg: number;
      Md: number;
      Sm: number;
    };
  };

  // Site Grid
  Grid: {
    SiteWidth: number;
    ReadingWidth: number;
    Nav: {
      Size: {
        Lg: number;
        Md: number;
        Sm: number;
      };
    };

    Footer: {
      Size: {
        Lg: number;
        Md: number;
        Sm: number;
      };
    };

    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Lg: {
        Top: number;
        Bottom: number;
        Right: number;
        Left: number;
      };
      Md: {
        Top: number;
        Bottom: number;
        Right: number;
        Left: number;
      };
      Sm: {
        Top: number;
        Bottom: number;
        Right: number;
        Left: number;
      };
    };

    Indent: {
      Lg: {
        X: number;
        Y: number;
      };
      Md: {
        X: number;
        Y: number;
      };
      Sm: {
        X: number;
        Y: number;
      };
    };
  };

  // Begin Component
  //////////////////////////////////////////////////////////////////////

  // View Width (vw) Based Measurements
  ViewWidth: {
    Padding: {
      Sm: "4.5"; // vw
      Md: "4.5"; // vw
      Lg: "1.2"; // vw
    };
  };

  // Buttons
  Button: {
    Lg: 35; // px
    Md: 35; // px
    Sm: 35; // px
  };

  // Inputs
  Input: {
    Lg: 44; // px
    Md: 35; // px
    Sm: 35; // px
  };

  // Transitions
  Transition: {
    String: "all 0.25s ease";
    Duration: 0.25; // seconds
    Ease: [0.29, 0.77, 0.57, 0.85]; // Cubic Bezier Ease
    Page: 2000; // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.
  };

  // Geometry
  Geometry: {
    Radius: 15; // px
  };
}

export const Base = {
  // Core Base Measurement
  Size: {
    Lg: 20,
    Md: 20,
    Sm: 20
  },

  // Root Element Measurement
  Rem: {
    Lg: 14, // px
    Md: 16, // px
    Sm: 18 // px
  },

  // Responsive Breakpoints
  Media: {
    Width: {
      Lg: 1280, // px
      Md: 1024, // px
      Sm: 676 // px
    },
    Height: {
      Lg: 828, // px
      Md: 640, // px
      Sm: 568 // px
    }
  },

  // Site Grid
  Grid: {
    SiteWidth: 1280, // px
    ReadingWidth: 1000, // px
    Nav: {
      Size: {
        Lg: 50, // px
        Md: 50, // px
        Sm: 50 // px
      }
    },

    Footer: {
      Size: {
        Lg: 35, // px
        Md: 35, // px
        Sm: 35 // px
      }
    },

    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Lg: {
        Top: 20, // px
        Bottom: 20, // px
        Right: 20, // px
        Left: 20 // px
      },
      Md: {
        Top: 45, // px
        Bottom: 45, // px
        Right: 20, // px
        Left: 20 // px
      },
      Sm: {
        Top: 20, // px
        Bottom: 20, // px
        Right: 15, // px
        Left: 15 // px
      }
    },

    Indent: {
      Lg: {
        X: 175, // px
        Y: 20 // px
      },
      Md: {
        X: 0, // px
        Y: 10 // px
      },
      Sm: {
        X: 0, // px
        Y: 0 // px
      }
    }
  },

  // View Width (vw) Based Measurements
  ViewWidth: {
    Padding: {
      Sm: "4.5", // vw
      Md: "4.5", // vw
      Lg: "1.2" // vw
    }
  },

  // Buttons
  Button: {
    Lg: 35, // px
    Md: 35, // px
    Sm: 35 // px
  },

  // Inputs
  Input: {
    Lg: 44, // px
    Md: 35, // px
    Sm: 35 // px
  },

  // Transitions
  Transition: {
    String: "all 0.25s ease",
    Duration: 0.25, // seconds
    Ease: [0.29, 0.77, 0.57, 0.85], // Cubic Bezier Ease
    Page: 2000 // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.
  },

  // Geometry
  Geometry: {
    Radius: 15 // px
  },

  // Frame
  FrameSize: 3 // rem
};

// End Component
//////////////////////////////////////////////////////////////////////
