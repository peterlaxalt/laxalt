// Core
import React from "react";
import { CSSProperties } from "styled-components";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";

// Styles
import { SplitTextHeroClassName, SplitTextHeroStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_SplitTextHero = LXLT_SimpleContentNode & {
  hasSidebar?: boolean;
};

/**
 *
 * @name SplitTextHero
 * @author Peter Laxalt
 * @requires /studio/sections/SplitTextHero
 *
 */
export const SplitTextHero: React.FunctionComponent<LMNTS_Section_SplitTextHero> = ({
  style,
  hasSidebar,
}) => {
  let stringOne = "STUDIO";
  let stringTwo = "LAXALT";

  return (
    <SplitTextHeroStyle
      style={style}
      className={`${SplitTextHeroClassName} ${SplitTextHeroClassName}--${
        hasSidebar ? `has-sidebar` : `sans-sidebar`
      }`}
    >
      <div className={`${SplitTextHeroClassName}__inner`}>
        {/* ____________________________________________________________ */}
        {/* Headline */}
        <h1 className={`${SplitTextHeroClassName}__headline`}>
          <span className={`${SplitTextHeroClassName}__headline__item`}>
            {stringOne.split("").map((letter: string, idx: number) => {
              return (
                <span
                  className={`${SplitTextHeroClassName}__headline__item__letter`}
                  style={{ ["--animDelay" as any]: `${(idx + 1) * 0.05}s` }}
                >
                  {letter}
                </span>
              );
            })}
          </span>
          <span className={`${SplitTextHeroClassName}__headline__item`}>
            {stringTwo.split("").map((letter: string, idx: number) => {
              return (
                <span
                  className={`${SplitTextHeroClassName}__headline__item__letter`}
                  style={{ ["--animDelay" as any]: `${(idx + stringOne.split("").length) * 0.05}s` }}
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </h1>

        {/* ____________________________________________________________ */}
        {/* Bottom */}
        <div className={`${SplitTextHeroClassName}__bottom-details`}>
          <div className={`${SplitTextHeroClassName}__bottom-details__col`}>
            <strong>
              Studio Laxalt is the private studio of Peter Francis Laxalt.
            </strong>
          </div>

          <div className={`${SplitTextHeroClassName}__bottom-details__col`}>
            <span>
              It serves as a personal archive & knowledge-base.
            </span>
          </div>
        </div>
      </div>
    </SplitTextHeroStyle>
  );
};

// End Component
// __________________________________________________________________________________________
