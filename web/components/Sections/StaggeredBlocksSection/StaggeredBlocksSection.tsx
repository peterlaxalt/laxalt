// Core
import React from "react";
import { CSSProperties } from "styled-components";
import { DuotoneImage, LXLT_DuotoneImage } from "../../DuotoneImage";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";

// Styles
import {
  StaggeredBlockClassName,
  StaggeredBlocksSectionClassName,
  StaggeredBlocksSectionStyle,
  StaggeredBlockStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LXLT_Section_StaggeredBlocksSection = {
  hasSidebar?: boolean;
};

export type LXLT_Section_StaggeredBlock = {
  children: React.ReactNode;
  addClass?: string;

  style?: CSSProperties;

  img: LXLT_DuotoneImage;
};

export const StaggeredBlock: React.FunctionComponent<LXLT_Section_StaggeredBlock> = ({
  children,
  img,
  addClass,
  style,
}) => {
  return (
    <StaggeredBlockStyle
      style={style ? style : {}}
      className={`${StaggeredBlockClassName} ${addClass ? addClass : ''}`}
    >
      <div className={`${StaggeredBlockClassName}__inner`}>
        <div className={`${StaggeredBlockClassName}__content`}>{children}</div>

        <div className={`${StaggeredBlockClassName}__media`}>
          <DuotoneImage {...img} />
        </div>
      </div>
    </StaggeredBlockStyle>
  );
};

/**
 *
 * @name StaggeredBlocksSection
 * @author Peter Laxalt
 * @requires /studio/sections/StaggeredBlocksSection
 *
 */
export const StaggeredBlocksSection: React.FunctionComponent<LXLT_Section_StaggeredBlocksSection> = ({
  hasSidebar,
}) => {
  return (
    <StaggeredBlocksSectionStyle
      className={`${StaggeredBlocksSectionClassName} ${StaggeredBlocksSectionClassName}--${
        hasSidebar ? `has-sidebar` : `sans-sidebar`
      }`}
    >
      <div className={`${StaggeredBlocksSectionClassName}__inner`}>
        <div className={`${StaggeredBlocksSectionClassName}__block-listings`}>
          <StaggeredBlock
            img={{
              src: "/img/headshot.jpg",
              aspectRatio: 1,
              alt: "Content",
            }}
          >
            <p>
              <strong>October 2014</strong> — Peter started a design studio in
              Reno, Nevada with Matthew McIver, called{" "}
              <strong>Laxalt & McIver</strong>. At L&M, he focused his eyes on
              various pursuits ranging from branding, murals, creative
              direction, packaging, illustration, and installations.
            </p>
          </StaggeredBlock>

          <StaggeredBlock
            img={{
              src: "/img/headshot.jpg",
              aspectRatio: 1,
              alt: "Content",
            }}
          >
            <p>
              <strong>October 2014</strong> — Peter started a design studio in
              Reno, Nevada with Matthew McIver, called{" "}
              <strong>Laxalt & McIver</strong>. At L&M, he focused his eyes on
              various pursuits ranging from branding, murals, creative
              direction, packaging, illustration, and installations.
            </p>
          </StaggeredBlock>

          <StaggeredBlock
            img={{
              src: "/img/headshot.jpg",
              aspectRatio: 1,
              alt: "Content",
            }}
          >
            <p>
              <strong>October 2014</strong> — Peter started a design studio in
              Reno, Nevada with Matthew McIver, called{" "}
              <strong>Laxalt & McIver</strong>. At L&M, he focused his eyes on
              various pursuits ranging from branding, murals, creative
              direction, packaging, illustration, and installations.
            </p>
          </StaggeredBlock>

          <StaggeredBlock
            img={{
              src: "/img/headshot.jpg",
              aspectRatio: 1,
              alt: "Content",
            }}
          >
            <p>
              <strong>October 2014</strong> — Peter started a design studio in
              Reno, Nevada with Matthew McIver, called{" "}
              <strong>Laxalt & McIver</strong>. At L&M, he focused his eyes on
              various pursuits ranging from branding, murals, creative
              direction, packaging, illustration, and installations.
            </p>
          </StaggeredBlock>

          <StaggeredBlock
            img={{
              src: "/img/headshot.jpg",
              aspectRatio: 1,
              alt: "Content",
            }}
          >
            <p>
              <strong>October 2014</strong> — Peter started a design studio in
              Reno, Nevada with Matthew McIver, called{" "}
              <strong>Laxalt & McIver</strong>. At L&M, he focused his eyes on
              various pursuits ranging from branding, murals, creative
              direction, packaging, illustration, and installations.
            </p>
          </StaggeredBlock>

          <StaggeredBlock
            img={{
              src: "/img/headshot.jpg",
              aspectRatio: 1,
              alt: "Content",
            }}
          >
            <p>
              <strong>October 2014</strong> — Peter started a design studio in
              Reno, Nevada with Matthew McIver, called{" "}
              <strong>Laxalt & McIver</strong>. At L&M, he focused his eyes on
              various pursuits ranging from branding, murals, creative
              direction, packaging, illustration, and installations.
            </p>
          </StaggeredBlock>
        </div>
      </div>
    </StaggeredBlocksSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
