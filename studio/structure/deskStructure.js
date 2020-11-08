/**
 *
 * @name LMNTS-6 Sanity.io Desk Structure
 * @author Peter Laxalt
 * @description LMNTS-6 Desk Structure Model
 *
 */

// __________________________________________________________________________________________

// Core
import S from "@sanity/desk-tool/structure-builder";

// __________________________________________________________________________________________

/**
 * Our Hidden Doc Types
 */

const hiddenDocTypes = listItem =>
  ![
    "config",
    "navigation", // For example purposes
    "hiddenItem", // For example purposes
    "hiddenItem", // For example purposes
    "hiddenItem", // For example purposes
    "hiddenItem" // For example purposes
  ].includes(listItem.getId());

/**
 * Our Desk Structure
 */

export default () =>
  S.list()
    .title("Content")
    .items([
      /**
       * List all of our document types, filter out
       * our hidden document types
       */
      ...S.documentTypeListItems().filter(hiddenDocTypes),

      /**
       * Our Singleton list items
       */
      S.listItem()
        .title("Config")
        .showIcon(false)
        .child(
          S.editor()
            .id("config")
            .schemaType("config")
            .documentId("globalConfig")
        ),
      S.listItem()
        .title("Navigation")
        .showIcon(false)
        .child(
          S.editor()
            .id("siteNav")
            .schemaType("navigation")
            .documentId("siteNav")
        )
    ]);

// __________________________________________________________________________________________
