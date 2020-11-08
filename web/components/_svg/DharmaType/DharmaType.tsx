// Core
import React from "react";
import { DharmaTypeClassName, DharmaTypeStyle } from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

type LXLT_DharmaType = {
  text: string;
};

// Begin Component
// __________________________________________________________________________________________

/**
 * @name DharmaType
 * @author Peter Laxalt
 *
 */
export const DharmaType: React.FunctionComponent<LXLT_DharmaType> = ({
  text,
}) => {
  let viewBoxHeight = 173.21;
  let viewBoxWidth = 215.21;

  let characterArray = text.split("");
  let characterCount = characterArray.length;
  // let characterWidth = viewBoxWidth / characterCount;

  console.log("characterArray / ", characterArray);
  console.log("characterCount / ", characterCount);

  return (
    <DharmaTypeStyle
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="none"
      className={`${DharmaTypeClassName}`}
      style={{
        [`--${DharmaTypeClassName}-font-size` as any]: `${viewBoxHeight}px`,
      }}
    >
      <g>
        <g className={`${DharmaTypeClassName}__character-wrapper`}>
          <text
            className={`${DharmaTypeClassName}__text`}
            transform="translate(0 170.53) scale(1.13, 1.39)"
          >
            {characterArray.map((char: string, idx: number) => {
              return (
                <tspan
                  key={idx}
                  className={`${DharmaTypeClassName}__text__char`}
                  style={{
                    [`--${DharmaTypeClassName}-key` as any]: idx,
                  }}
                >
                  {char}
                </tspan>
              );
            })}
          </text>
        </g>
      </g>
    </DharmaTypeStyle>
  );
};

{
}

{
  /* <g>
          <text
            className={`${DharmaTypeClassName}__text`}
            transform="translate(0 170.53) scale(1.15, 1.39)"
          >
            {text}
          </text>
        </g> */
}
