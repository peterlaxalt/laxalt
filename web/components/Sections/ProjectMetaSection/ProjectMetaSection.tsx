// Core
import { NextPage } from "next";
import React from "react";

// Types
import { LXLT_Project } from "../../../constants/site/Settings";

// Constants
import { TableRowListingClassName } from "../../../components/Sections/TableListings/styles.scss";

// Components
import { AccordionListingRow } from "../../../components/Sections/AccordionListingRow";
import { TableColumnListing } from "../../../components/Sections/TableListings";
import { TableRowListing } from "../../../components/Sections/TableListings/TableRowListings";

// Begin Component
// __________________________________________________________________________________________

type LXLT_ProjectMetaSection = {
  project: LXLT_Project;
};

export const ProjectMetaSectionClassName = "project-meta-section";

/**
 *
 * @name ProjectMetaSection
 * @author Peter Laxalt
 *
 */
const ProjectMetaSection: NextPage<LXLT_ProjectMetaSection> = ({ project }) => {
  return (
    <div className={`${ProjectMetaSectionClassName}`}>
      {project.meta && project.meta.team && (
        <AccordionListingRow
          hasSidebar={true}
          alternativeStyle={true}
          labelLeft={`Shoutouts`}
          labelRight={`Credits`}
        >
          {project.meta && project.meta.team && project.meta.team.core && (
            <TableRowListing
              hasSidebar={true}
              addClass={`${TableRowListingClassName}--team-table`}
              data={project.meta.team.core.map((person) => {
                let field: string[] = [];

                field[0] = person.name;
                field[1] = person.role;
                field[2] = person.web;
                field[3] = person.contact;

                return {
                  fields: field,
                };
              })}
              tableName={`Team`}
              tableHeaders={Object.keys(project.meta.team.core[0])}
            />
          )}

          {project.meta && project.meta.team && project.meta.team.mentions && (
            <TableRowListing
              hasSidebar={true}
              addClass={`${TableRowListingClassName}--team-table`}
              data={project.meta.team.mentions.map((person) => {
                let field: string[] = [];

                field[0] = person.name;
                field[1] = person.role;
                field[2] = person.web;
                field[3] = person.contact;

                return {
                  fields: field,
                };
              })}
              tableName={`Shoutouts`}
              tableHeaders={Object.keys(project.meta.team.core[0])}
            />
          )}
        </AccordionListingRow>
      )}

      {project.meta && project.meta.tools && (
        <AccordionListingRow
          hasSidebar={true}
          alternativeStyle={true}
          labelLeft={`Approach`}
          labelRight={`Tools`}
        >
          {project.meta && project.meta.tools && project.meta.tools.software && (
            <TableRowListing
              hasSidebar={true}
              addClass={`${TableRowListingClassName}--tools-table`}
              data={project.meta.tools.software.map((tool) => {
                let field: string[] = [];

                field[0] = tool.name;
                field[1] = tool.purpose;

                return {
                  fields: field,
                };
              })}
              tableName={`Software`}
              tableHeaders={Object.keys(project.meta.tools.software[0])}
            />
          )}

          {project.meta && project.meta.tools && project.meta.tools.gear && (
            <TableRowListing
              hasSidebar={true}
              addClass={`${TableRowListingClassName}--tools-table`}
              data={project.meta.tools.gear.map((tool) => {
                let field: string[] = [];

                field[0] = tool.name;
                field[1] = tool.purpose;

                return {
                  fields: field,
                };
              })}
              tableName={`Gear`}
              tableHeaders={Object.keys(project.meta.tools.gear[0])}
            />
          )}

          {project.meta && project.meta.tools && project.meta.tools.frontend && (
            <TableRowListing
              hasSidebar={true}
              addClass={`${TableRowListingClassName}--tools-table`}
              data={project.meta.tools.frontend.map((tool) => {
                let field: string[] = [];

                field[0] = tool.name;
                field[1] = tool.purpose;

                return {
                  fields: field,
                };
              })}
              tableName={`Frontend`}
              tableHeaders={Object.keys(project.meta.tools.frontend[0])}
            />
          )}

          {project.meta && project.meta.tools && project.meta.tools.backend && (
            <TableRowListing
              hasSidebar={true}
              addClass={`${TableRowListingClassName}--tools-table`}
              data={project.meta.tools.backend.map((tool) => {
                let field: string[] = [];

                field[0] = tool.name;
                field[1] = tool.purpose;

                return {
                  fields: field,
                };
              })}
              tableName={`Backend`}
              tableHeaders={Object.keys(project.meta.tools.backend[0])}
            />
          )}
        </AccordionListingRow>
      )}

      {project.meta && project.meta.awards && (
        <AccordionListingRow
          hasSidebar={true}
          alternativeStyle={true}
          labelLeft={`Awards`}
          labelRight={`Wins`}
        >
          {project.meta && project.meta.awards && project.meta.awards.items && (
            <TableRowListing
              hasSidebar={true}
              addClass={`${TableRowListingClassName}--tools-table`}
              data={project.meta.awards.items.map((award) => {
                let field: string[] = [];

                field[0] = award.name;
                field[1] = award.provider;
                field[2] = award.year;

                return {
                  fields: field,
                };
              })}
              tableName={`Awards`}
              tableHeaders={Object.keys(project.meta.awards.items[0])}
            />
          )}

          {project.meta && project.meta.awards && project.meta.awards.mentions && (
            <TableRowListing
              hasSidebar={true}
              addClass={`${TableRowListingClassName}--tools-table`}
              data={project.meta.awards.mentions.map((award) => {
                let field: string[] = [];

                field[0] = award.name;
                field[1] = award.publisher;
                field[2] = award.year;

                return {
                  fields: field,
                };
              })}
              tableName={`Mentions`}
              tableHeaders={Object.keys(project.meta.awards.mentions[0])}
            />
          )}

          {project.meta && project.meta.awards && project.meta.awards.wins && (
            <TableColumnListing
              hasSidebar={true}
              addClass={`${TableRowListingClassName}--wins-table`}
              data={project.meta.awards.wins.map((win) => {
                return {
                  label: win,
                };
              })}
              tableName={`Wins`}

            />
          )}
        </AccordionListingRow>
      )}
    </div>
  );
};

export default ProjectMetaSection;
