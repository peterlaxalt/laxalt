// Core
import React, { Component } from "react";

// Constants
import { __DEBUG__ } from "../../constants/site/Settings";

// Styles
import {
  InteractiveEyeballClassName,
  InteractiveEyeballStyle,
  // InteractiveOverlayNavigationClassName,
} from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_InteractiveEyeball_State = {
  mouseX: number;
  mouseY: number;

  scrollX: number;
  scrollY: number;

  pupilWidth: number;
  pupilHeight: number;

  pupilOffsetX: number;
  pupilOffsetY: number;

  rotation: number;
};

export type LXLT_InteractiveEyeball = {
  addClass?: string;
  scrollContainer?: React.RefObject<HTMLElement>;
  isInverted?: boolean;
};

/**
 *
 * @name InteractiveEyeball
 * @author Peter Laxalt
 *
 */
export class InteractiveEyeball extends Component<
  LXLT_InteractiveEyeball,
  LXLT_InteractiveEyeball_State
> {
  constructor(props: LXLT_InteractiveEyeball) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,

      scrollX: 0,
      scrollY: 0,

      pupilWidth: 0,
      pupilHeight: 0,

      pupilOffsetX: 0,
      pupilOffsetY: 0,

      rotation: 0,
    };

    this.handleMouseMovement = this.handleMouseMovement.bind(this);

    this.calculatePupilBoundaries = this.calculatePupilBoundaries.bind(this);
  }

  /**
   *
   * @name componentDidMount()
   *
   */
  componentDidMount() {
    if (typeof window && this.pupilRef) {
      this.calculatePupilBoundaries();

      window.addEventListener("mousemove", this.handleMouseMovement);
    } else {
      return;
    }
  }

  componentWillUnmount() {
    if (typeof window) {
      window.removeEventListener("mousemove", this.handleMouseMovement);
    }
  }

  calculatePupilBoundaries() {
    if (this.pupilRef.current) {
      let pupilClientRect = this.pupilRef.current.getBoundingClientRect();

      this.setState({
        pupilWidth: pupilClientRect.width,
        pupilHeight: pupilClientRect.height,

        pupilOffsetX: pupilClientRect.left,
        pupilOffsetY: pupilClientRect.top,
      });
    }
  }

  handleMouseMovement(e: MouseEvent) {
    if (e) {
      // let radians = Math.atan2(
      //   e.screenY - (this.state.pupilOffsetY - this.state.pupilHeight / 2),
      //   e.screenX - (this.state.pupilOffsetX - this.state.pupilWidth / 2)
      // );

      let scrollContainer =
        this.props.scrollContainer && this.props.scrollContainer.current
          ? this.props.scrollContainer.current
          : document.querySelector("html");

      let radians = Math.atan2(
        e.clientY +
          scrollContainer.scrollTop -
          (this.state.pupilOffsetY - this.state.pupilHeight / 2),
        e.clientX - (this.state.pupilOffsetX - this.state.pupilWidth / 2)
      );

      let angle = radians * (180 / Math.PI) - 15;

      this.setState({
        rotation: angle,
      });
    } else {
      return;
    }
  }

  pupilRef = React.createRef<HTMLSpanElement>();

  render() {
    // console.log(this.state);

    return (
      <InteractiveEyeballStyle
        className={`${InteractiveEyeballClassName} ${
          this.props.addClass ? this.props.addClass : ''
        } ${InteractiveEyeballClassName}--is-${
          this.props.isInverted ? `inverted` : `not-inverted`
        }`}
      >
        <span className={`${InteractiveEyeballClassName}__outline`} />
        <span className={`${InteractiveEyeballClassName}__pupil-wrapper`}>
          <span
            ref={this.pupilRef}
            className={`${InteractiveEyeballClassName}__pupil`}
            style={{ transform: `rotate(${this.state.rotation}deg)` }}
          >
            <span className={`${InteractiveEyeballClassName}__pupil__el`} />
          </span>
        </span>
      </InteractiveEyeballStyle>
    );
  }
}

// End Component
// ______________________________________________________________________________
