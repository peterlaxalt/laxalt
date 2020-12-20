// Core
import React from "react";

// Constants
import { LXLT_LinkItem, __DEBUG__ } from "../../constants/site/Settings";

// Components
import Link from "next/link";

// Styles
import { OvalButtonClassName, OvalButtonStyle } from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_OvalButton = LXLT_LinkItem & {
  addClass?: string;
  onClick?: () => void;
  invert?: boolean;
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
  invert = false,
}) => {
  return (
    <>
      <OvalButtonStyle className={`${OvalButtonClassName} ${addClass}`}>
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
        {href && (
          <Link href={href}>
            <a
              className={`${OvalButtonClassName}__el ${OvalButtonClassName}__el--is-${
                invert ? `inverted` : `not-inverted`
              }`}
              onClick={onClick}
            >
              {label}
            </a>
          </Link>
        )}
      </OvalButtonStyle>
    </>
  );
};

// End Component
// ______________________________________________________________________________
