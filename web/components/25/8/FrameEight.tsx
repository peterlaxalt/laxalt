/**
 *
 * /components/25/13/FrameEight.tsx
 * @author Peter Laxalt
 * @description The Structure for Number 8 of the 25 Series.
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

export const FrameEight = (props: any) => {
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
              d="M0,0v2045.9h1683.8V0H0z M1500.8,1385.4c-75.4,232.3-406.6,270.3-578,390.5
	c-172.8,121.2-267.3,170.2-413.6,90.8c-137.9-74.9-306.9-145.5-357-366.6c-50.5-222.9,132.6-430.4,204.9-653.2
	c75.4-232.3,45.8-544.4,217.2-664.6c172.8-121.2,320.9,50.5,467.2,129.9c137.9,74.9,391.4,68.2,441.5,289.2
	C1533.5,824.4,1573.1,1162.7,1500.8,1385.4z"
            />
          </svg>
        </div>
      </FrameStyle>
      <Pagination theme={props.theme} currentSketch={props.currentSketch} />
    </>
  );
};
