/**
 *
 * @name Navigation Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Navigation Data Model
 *
 */

// __________________________________________________________________________________________

export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "items",
      title: "Items",
      type: "reference",
      to: [{ type: "project" }]
    }
  ]
};

// __________________________________________________________________________________________
