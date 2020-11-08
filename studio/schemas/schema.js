/**
 *
 * @name LMNTS-6 Sanity.io Content Schema
 * @author Peter Laxalt
 * @description LMNTS-6 Site Content Model
 *
 */

// __________________________________________________________________________________________

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Content Schemas
import location from "./content/location";
import service from "./content/service";
import phase from "./content/phase";
import stage from "./content/stage";
import experiment from "./content/experiment";
import project from "./content/project";
import page from "./content/page";
import article from "./content/article";

// Setting Schemas
import config from "./settings/config";
import navigation from "./settings/navigation";

// Element Schemas
import blockContent from "./elements/blockContent";

// __________________________________________________________________________________________

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /**
     *
     * Load Schema Types
     *
     */
    project,
    article,
    service,
    phase,
    stage,
    location,
    experiment,
    page,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    config,
    navigation
  ])
});
