// Imports
// __________________________________________________________________________________________

// Core
import React from "react";

// Styles
import GrainCoverStyle, { GrainCoverClassName } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * GrainCover.js
 * @author Peter Laxalt
 * @description Our main launcher dialog.
 * @example Default: <GrainCover visible={true | false} />
 *
 */
export const GrainCover: React.FunctionComponent = () => {
  return (
    <GrainCoverStyle className={`${GrainCoverClassName}`}>
      <div className={`${GrainCoverClassName}__inner`} />
    </GrainCoverStyle>
  );
};
