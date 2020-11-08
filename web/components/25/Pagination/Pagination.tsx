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
import Link from "next/link";

// Styles
import { PaginationStyle } from "./styles.scss";

// Config
import { Config } from "../Config";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Pagination = (props: any) => {
  return (
    <>
      <PaginationStyle theme={props.theme}>
        <ul>
          {Config.posts.map((post: any, idx: number) => {
            if (idx + 1 !== props.currentSketch) {
              return (
                <li key={idx}>
                  <Link href={`/projects/${Config.slug}/${idx + 1}`}>
                    <a title={`${idx + 1} - ${post.year} - ${post.name}`}>
                      {idx + 1}
                    </a>
                  </Link>
                </li>
              );
            } else {
              return (
                <li className="active" key={idx}>
                  <Link href={`/projects/${Config.slug}/${idx + 1}`}>
                    <a title={`${idx + 1} - ${post.year} - ${post.name}`}>
                      {idx + 1}
                    </a>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </PaginationStyle>
    </>
  );
};
