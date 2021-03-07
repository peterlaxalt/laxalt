// Core
import React from "react";

// Constants
import { LXLT_LinkItem, __DEBUG__ } from "../../constants/site/Settings";

// Components
import Link from "next/link";

// Styles
import { OvalButtonClassName, OvalButtonStyle } from "./styles.scss";
import { CSSProperties } from "styled-components";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_OvalButton = LXLT_LinkItem & {
  addClass?: string;
  onClick?: () => void;
  invert?: boolean;
  external?: boolean;
  addStyles?: CSSProperties;
};

// Begin Data
// __________________________________________________________________________________________

/**
 *
 * @name OvalButton
 * @author Peter Laxalt
 *
 */

export const OvalButton: React.FunctionComponent<LXLT_OvalButton> = ({
  addClass,
  href,
  label,
  onClick,
  external,
  invert = false,
  addStyles
}) => {
  return (
    <>
      <OvalButtonStyle style={addStyles ? addStyles : null} className={`${OvalButtonClassName} ${addClass}`}>
        {/* _________________________________________________ */}
        {/* Non Links */}
        {!href && (
          <span
            className={`${OvalButtonClassName}__el ${OvalButtonClassName}__el--is-${
              invert ? `inverted` : `not-inverted`
            }`}
            onClick={onClick}
          >
            {label}
          </span>
        )}

        {/* _________________________________________________ */}
        {/* Links */}
        {href && !external && (
          <Link href={href}>
            <a
              className={`${OvalButtonClassName}__el ${OvalButtonClassName}__el--is-${
                invert ? `inverted` : `not-inverted`
              }`}
              onClick={onClick}
              target={external ? "_blank" : undefined}
            >
              {label}
            </a>
          </Link>
        )}

        {href && external && (
          <a
            href={href}
            className={`${OvalButtonClassName}__el ${OvalButtonClassName}__el--is-${
              invert ? `inverted` : `not-inverted`
            }`}
            onClick={onClick}
            target={"_blank"}
          >
            {label}
          </a>
        )}
      </OvalButtonStyle>
    </>
  );
};

// End Component
// ______________________________________________________________________________
