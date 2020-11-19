// Core
import React from "react";
import { createGlobalStyle } from "styled-components";
import { CssUtils } from "../../constants/styles/CssUtils";
import { Theme } from "../../constants/Theme";
import { ThemePickerClassName, ThemePickerStyle } from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

type LXLT_ThemePicker = {};

type LXLT_Theme = {
  name: "default" | "cornsilk" | "goldenrod" | "cadetblue" | "orangered" | "galaxy";
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
};

type LXLT_ThemePickerState = {
  availableThemes: LXLT_Theme[];
  activeTheme?: LXLT_Theme;
};

// Begin Component
// __________________________________________________________________________________________

/**
 * @name ThemePicker
 * @author Peter Laxalt
 *
 */
export class ThemePicker extends React.PureComponent<
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
          foreground: Theme.Color.Foreground,
        },
        {
          name: "goldenrod",
          primary: "#393349",
          secondary: "#393349",
          background: "goldenrod",
          foreground: "#393349",
        },
        {
          name: "cadetblue",
          primary: "cornsilk",
          secondary: "cornsilk",
          background: "cadetblue",
          foreground: "cornsilk",
        },
        {
          name: "orangered",
          primary: "cornsilk",
          secondary: "cornsilk",
          background: "orangered",
          foreground: "cornsilk",
        },
        {
          name: "cornsilk",
          primary: Theme.Color.Galaxy,
          secondary: Theme.Color.Galaxy,
          background: "cornsilk",
          foreground: Theme.Color.Galaxy,
        },
        {
          name: "galaxy",
          primary: Theme.Color.Galaxy,
          secondary: Theme.Color.Galaxy,
          background: Theme.Color.Galaxy,
          foreground: Theme.Color.Background,
        },
      ],
    };

    this.setNewTheme = this.setNewTheme.bind(this);
  }

  setNewTheme(theme: LXLT_Theme) {
    this.setState({
      activeTheme: theme,
    });
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
            ? availableThemes.map((themeItem: LXLT_Theme, idx: number) => {
                return (
                  <div
                    className={`${ThemePickerClassName}__option ${ThemePickerClassName}__option--${themeItem.name === activeTheme.name ? 'active' : 'inactive'}`}
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
