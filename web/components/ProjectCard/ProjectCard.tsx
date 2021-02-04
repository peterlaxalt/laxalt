// Core
import Link from "next/link";
import React, { useRef } from "react";

// Types
import { LXLT_Category, LXLT_Project } from "../../constants/site/Settings";

// Utils
import { isVisible } from "../../utils/isVisible";
import { DuotoneImage } from "../DuotoneImage";

// Components

// Styles
import { ProjectCardClassName, ProjectCardStyle } from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_ProjectCard = {
  item: LXLT_Project;
  count?: number;
  total?: number;
};

// Begin Component
// __________________________________________________________________________________________

export const ProjectCard: React.FunctionComponent<LXLT_ProjectCard> = React.memo(
  ({ item, count, total }) => {
    let { cover } = item;
    const ProjectCardRef = useRef<HTMLDivElement>();
    const isCurrentlyVisible = isVisible(ProjectCardRef);

    return (
      <Link href={`/and/${item.slug}`}>
        <ProjectCardStyle
          ref={ProjectCardRef}
          className={`${ProjectCardClassName} ${ProjectCardClassName}--${
            isCurrentlyVisible ? `is-visible` : `is-not-visible`
          }`}
        >
          <span className={`${ProjectCardClassName}__bg`} />
          <span
            className={`${ProjectCardClassName}__dot ${ProjectCardClassName}__dot--right`}
          />
          <div className={`${ProjectCardClassName}__inner`}>
            {/* ____________________________________________________________________ */}
            {/* Card top */}
            <div
              className={`${ProjectCardClassName}__row ${ProjectCardClassName}__row--top`}
            >
              {/* ____________________________________________________________________ */}
              {/* Card top left col */}
              <div
                className={`${ProjectCardClassName}__col ${ProjectCardClassName}__col--top-left`}
              >
                <span className={`${ProjectCardClassName}__col__content-row`}>
                  No {count} / {total}
                </span>
              </div>

              {/* ____________________________________________________________________ */}
              {/* Card top right col */}
              <div
                className={`${ProjectCardClassName}__col ${ProjectCardClassName}__col--top-right`}
              >
                <span className={`${ProjectCardClassName}__col__content-row`}>
                  {item.duration && item.duration}
                </span>
              </div>
            </div>

            {/* ____________________________________________________________________ */}
            {/* Card center */}
            <div
              className={`${ProjectCardClassName}__row ${ProjectCardClassName}__row--center`}
            >
              <DuotoneImage
                src={cover}
                addClass={`${ProjectCardClassName}__image-wrapper`}
                alt={item.name}
                aspectRatio={3 / 4}
              />
            </div>

            {/* ____________________________________________________________________ */}
            {/* Card bottom */}
            <div
              className={`${ProjectCardClassName}__row ${ProjectCardClassName}__row--bottom`}
            >
              {/* ____________________________________________________________________ */}
              {/* Card bottom left col */}
              <div
                className={`${ProjectCardClassName}__col ${ProjectCardClassName}__col--bottom-left`}
              >
                <strong
                  className={`${ProjectCardClassName}__col__content-row ${ProjectCardClassName}__col__content-row--content-major`}
                >
                  {item.name}
                </strong>
                <span
                  className={`${ProjectCardClassName}__col__content-row ${ProjectCardClassName}__col__content-row--content-minor ${ProjectCardClassName}__col__content-row--tag-list`}
                >
                  {item.categories.map(
                    (category: LXLT_Category, idx: number) => {
                      let itemLimit = 3;

                      if (idx < itemLimit) {
                        return (
                          <span key={idx}>
                            {category.name}{" "}
                            {idx + 1 !== item.categories.length
                              ? "/" + " "
                              : ""}
                          </span>
                        );
                      } else if (idx === itemLimit) {
                        return (
                          <span key={idx}>
                            +{item.categories.length - itemLimit} More
                          </span>
                        );
                      } else {
                        return null;
                      }
                    }
                  )}
                </span>
              </div>

              {/* ____________________________________________________________________ */}
              {/* Card bottom right col */}
              <div
                className={`${ProjectCardClassName}__col ${ProjectCardClassName}__col--bottom-right`}
              >
                <span
                  className={`${ProjectCardClassName}__col__content-row ${ProjectCardClassName}__col__content-row--content-major`}
                >
                  {item.type}
                </span>
                <span
                  className={`${ProjectCardClassName}__col__content-row ${ProjectCardClassName}__col__content-row--content-minor`}
                >
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        </ProjectCardStyle>
      </Link>
    );
  }
);

// End Component
// ______________________________________________________________________________
