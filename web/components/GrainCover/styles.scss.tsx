// GrainCover Styles

// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Grain } from "../../constants/styles/Animation";
import { Theme } from "../../constants/Theme";

// Animations

// Begin Styles
// __________________________________________________________________________________________

export const GrainCoverClassName = "grain-cover";

const GrainCoverStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  display: flex;
  /* display: none; */
  z-index: 999;
  /* mix-blend-mode: multiply; */
  opacity: 0.06;

  .${GrainCoverClassName}__inner {
    width: 1000vw;
    height: 1000vh;
    /* animation: grain 8s steps(10) infinite; */
    background-image: url("/noise-anim.gif");
    /* animation: ${Grain} 8s steps(10) infinite; */
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    opacity: .1;

    .${GrainCoverClassName}__inner {
      background-size: 50%;
    }
  }

  @media(max-width: ${Theme.Base.Media.Width.Md}) {
    display: none;
  }
`;

export default GrainCoverStyle;
