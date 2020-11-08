/**
 *
 * /components/25/13/FrameThirteen.tsx
 * @author Peter Laxalt
 * @description The Structure for Number 13 of the 25 Series.
 * @see https://www.dropbox.com/s/9p6ysxa71rowlvj/Screenshot%202020-01-26%2020.15.49.png?dl=0
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
// import Link from "next/link";

// Styles
import { CounterStyle } from "./styles.scss";

// Config
import { Config } from "../Config";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Counter = (props: any) => {
  return (
    <>
      <CounterStyle theme={props.theme}>
        <div className="number">
          <span>
            {props.currentSketch < 10
              ? "0" + props.currentSketch
              : props.currentSketch}
          </span>
          <span>{Config.posts.length}</span>
        </div>
        <div className="information">
          <span>{Config.posts[props.currentSketch].year}: </span>
          <span>"{Config.posts[props.currentSketch].name}"</span>
        </div>
      </CounterStyle>
    </>
  );
};
