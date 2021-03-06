// Core
import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { __DEBUG__ } from "../../constants/site/Settings";
import {
  ColorContext,
  LXLT_ColorTheme,
} from "../../constants/styles/Color";
import { CssUtils } from "../../constants/styles/CssUtils";
import { Theme } from "../../constants/Theme";
import { ThemePickerClassName, ThemePickerStyle } from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

type LXLT_ThemePicker = {
  setTheme: (theme: LXLT_ColorTheme) => void;
};

// type LXLT_Theme = {
// name: "default" | "white" | "goldenrod" | "cadetblue" | "orangered" | "galaxy";
//   primary: string;
//   secondary: string;
//   background: string;
//   foreground: string;
// };

type LXLT_ThemePickerState = {
  availableThemes: LXLT_ColorTheme[];
  activeTheme?: LXLT_ColorTheme;
};


export const ColorThemes: LXLT_ColorTheme[] = [
  {
    name: "default",
    primary: Theme.Color.Primary,
    secondary: Theme.Color.Secondary,
    background: Theme.Color.Background,
    foreground: Theme.Color.Primary,
  },
  {
    name: "galaxy",
    primary: "#FFF8DC",
    secondary: "#FFF8DC",
    background: Theme.Color.Primary,
    foreground: "#FFF8DC",
  },
  {
    name: "salmon",
    primary: "#000000",
    secondary: "#000000",
    background: "#FF8760",
    foreground: "#000000",
  },
  {
    name: "lemon",
    primary: "#003eff",
    secondary: "#003eff",
    background: "#F4FF5E",
    foreground: "#003eff",
  },
  {
    name: "goldenrod",
    primary: "#393349",
    secondary: "#393349",
    background: "#DAA520",
    foreground: "#393349",
  },
  {
    name: "cadetblue",
    primary: "#003eff",
    secondary: "#003eff",
    background: "#ffb5f9",
    foreground: "#003eff",
  },
  {
    name: "orangered",
    primary: "#FFF8DC",
    secondary: "#FFF8DC",
    background: "#FF4500",
    foreground: "#FFF8DC",
  },
];

// Begin Component
// __________________________________________________________________________________________

/**
 * @name ThemePickerWithHook
 * @author Peter Laxalt
 *
 */
export class ThemePickerWithHook extends React.PureComponent<
  LXLT_ThemePicker,
  LXLT_ThemePickerState
> {
  constructor(props: LXLT_ThemePicker) {
    super(props);

    this.state = {
      activeTheme: {
        name: "default",
        primary: Theme.Color.Primary,
        secondary: Theme.Color.Secondary,
        background: Theme.Color.Background,
        foreground: Theme.Color.Text,
      },
      availableThemes: ColorThemes,
    };

    this.setNewTheme = this.setNewTheme.bind(this);
  }

  componentDidMount() {
    if (typeof window) {
      window.laxaltUniversalTheme = this.state.activeTheme;

      let nextBodyElement = document.getElementById("__next");

      if (nextBodyElement) {
        nextBodyElement.setAttribute("data-theme", this.state.activeTheme.name);
      }

      // _________________________
      // Change if dark mode detected
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setNewTheme(this.state.availableThemes[1]);
      }

      __DEBUG__ && console.log("🎨 theme set", window.laxaltUniversalTheme);
    }
  }

  setNewTheme(theme: LXLT_ColorTheme) {
    const { setTheme } = this.props;

    this.setState({
      activeTheme: theme,
    });

    if (typeof window) {
      window.laxaltUniversalTheme = theme;

      let nextBodyElement = document.getElementById("__next");

      if (nextBodyElement) {
        nextBodyElement.setAttribute("data-theme", theme.name);
      }
    }

    setTheme(theme);
  }

  render() {
    let { activeTheme, availableThemes } = this.state;

    // const SetGlobalTheme = createGlobalStyle`
    //   ${
    //     activeTheme
    //       ? CssUtils.CreateTheme(
    //           activeTheme.primary,
    //           activeTheme.secondary,
    //           activeTheme.background,
    //           activeTheme.foreground
    //         )
    //       : ""
    //   }
    // `;

    return (
      <>
        {/* {activeTheme && activeTheme.name !== "default" ? (
          <SetGlobalTheme />
        ) : null} */}
        <ThemePickerStyle className={`${ThemePickerClassName}`}>
          <div className={`${ThemePickerClassName}__label`}>Change Theme</div>

          {availableThemes
            ? availableThemes.map((themeItem: LXLT_ColorTheme, idx: number) => {
                return (
                  <div
                    className={`${ThemePickerClassName}__option ${ThemePickerClassName}__option--${
                      themeItem.name === activeTheme.name
                        ? "active"
                        : "inactive"
                    }`}
                    onClick={() => this.setNewTheme(themeItem)}
                    key={idx}
                  >
                    <span
                      className={`${ThemePickerClassName}__option__el ${ThemePickerClassName}__option__el--primary`}
                      style={{
                        backgroundColor: themeItem.background,
                        border: `1px solid ${themeItem.foreground}`,
                      }}
                    />
                    <span
                      className={`${ThemePickerClassName}__option__el ${ThemePickerClassName}__option__el--secondary`}
                      style={{ backgroundColor: themeItem.foreground }}
                    />
                  </div>
                );
              })
            : null}
        </ThemePickerStyle>
      </>
    );
  }
}

export const ThemePicker: React.FunctionComponent = () => {
  const { setTheme } = useContext(ColorContext);

  return <ThemePickerWithHook setTheme={setTheme} />;
};
