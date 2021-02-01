// Core
import React, { useRef } from "react";

// Types
import { LXLT_Category, LXLT_Project } from "../../constants/site/Settings";

// Utils
import { isVisible } from "../../utils/isVisible";

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
            <div className={`${ProjectCardClassName}__image-wrapper`}>
              <img
                className={`${ProjectCardClassName}__image ${ProjectCardClassName}__image--filtered`}
                src={cover}
              />
              <img
                className={`${ProjectCardClassName}__image ${ProjectCardClassName}__image--normal`}
                src={cover}
              />
            </div>
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
                {item.categories.map((category: LXLT_Category, idx: number) => {
                  return (
                    <span key={idx}>
                      {category.name}{" "}
                      {idx + 1 !== item.categories.length ? "/" + " " : ""}
                    </span>
                  );
                })}
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
    );
  }
);

// End Component
// ______________________________________________________________________________
