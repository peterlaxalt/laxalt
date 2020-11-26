// Core
import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { __DEBUG__ } from "../../constants/site/Settings";
import { ColorContext, LXLT_ColorTheme } from "../../constants/styles/Color";
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
      availableThemes: [
        {
          name: "default",
          primary: Theme.Color.Primary,
          secondary: Theme.Color.Secondary,
          background: Theme.Color.Background,
          foreground: Theme.Color.Primary,
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
          primary: "#FFF8DC",
          secondary: "#FFF8DC",
          background: "#5F9EA0",
          foreground: "#FFF8DC",
        },
        {
          name: "orangered",
          primary: "#FFF8DC",
          secondary: "#FFF8DC",
          background: "#FF4500",
          foreground: "#FFF8DC",
        },
        {
          name: "white",
          primary: Theme.Color.Black,
          secondary: Theme.Color.Black,
          background: Theme.Color.White,
          foreground: Theme.Color.Black,
        },
        {
          name: "galaxy",
          primary: "#FFF8DC",
          secondary: "#FFF8DC",
          background: Theme.Color.Galaxy,
          foreground: "#FFF8DC",
        },
      ],
    };

    this.setNewTheme = this.setNewTheme.bind(this);
  }

  componentDidMount() {
    if (typeof window) {
      window.laxaltUniversalTheme = this.state.activeTheme;

      __DEBUG__ && console.log("🎨 theme set", window.laxaltUniversalTheme);
    }
  }

  setNewTheme(theme: LXLT_ColorTheme) {
    // const { setTheme } = this.props;

    this.setState({
      activeTheme: theme,
    });

    if (typeof window) {
      window.laxaltUniversalTheme = theme;
    }

    // setTheme(theme);
  }

  render() {
    let { activeTheme, availableThemes } = this.state;

    const SetGlobalTheme = createGlobalStyle`
      ${
        activeTheme
          ? CssUtils.CreateTheme(
              activeTheme.primary,
              activeTheme.secondary,
              activeTheme.background,
              activeTheme.foreground
            )
          : ""
      }
    `;

    return (
      <>
        {activeTheme && activeTheme.name !== "default" ? (
          <SetGlobalTheme />
        ) : null}
        <ThemePickerStyle className={`${ThemePickerClassName}`}>
          {availableThemes
            ? availableThemes.map((themeItem: LXLT_ColorTheme, idx: number) => {
                return (
                  <div
                    className={`${ThemePickerClassName}__option ${ThemePickerClassName}__option--${
                      themeItem.name === activeTheme.name
                        ? "active"
                        : "inactive"
                    }`}
                    style={{ backgroundColor: themeItem.background }}
                    onClick={() => this.setNewTheme(themeItem)}
                    key={idx}
                  />
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
