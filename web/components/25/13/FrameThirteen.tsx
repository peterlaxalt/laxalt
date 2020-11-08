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

// Styles
import { FrameStyle } from "./styles.scss";

// Components
import { Pagination } from "../Pagination";
import { Counter } from "../Counter";

// Config
// import { Config } from "../Config";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const FrameThirteen = (props: any) => {
  console.log(props);
  return (
    <>
      <Counter theme={props.theme} currentSketch={props.currentSketch} />
      <FrameStyle theme={props.theme}>
        <div className="svg-wrap">
          <svg
            version="1.1"
            x="0px"
            y="0px"
            preserveAspectRatio="none"
            viewBox="0 0 1683.8 2045.9"
          >
            <path
              className="st0"
              d="M0,0v2045.9h1683.8V0H0z M1536,1076.5c-15.1,247-122.1,370.7-252.8,530c-152.3,185.6-233.9,315.9-461.3,293.7
      c-226.5-22.1-397.2-110.4-525.2-322.1C186,1395,133.9,1183.8,149.1,935.8c15.1-247,176.1-373.5,306.9-532.8
      C608.2,217.5,695.6,116.5,923,138.7c226.5,22.1,264.3,169.3,392.3,380.9C1426,702.8,1551.2,828.5,1536,1076.5z"
            />
          </svg>
        </div>
      </FrameStyle>
      <Pagination theme={props.theme} currentSketch={props.currentSketch} />
    </>
  );
};
