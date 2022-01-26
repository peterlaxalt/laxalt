/**
 *
 * Queries.tsx:
 * @author Peter Laxalt
 * @description
 * This file is primarily used to manage our site's queries and the
 * manipulation of data that comes with them.
 *
 */

import { Airtable, AirtableUtils } from "../clients";

// Begin Component
// __________________________________________________________________________________________
/**
 *
 * @name QueryUtils
 * @description Our functions to manipulate data coming in.
 * @example
 * import { QueryUtils } from "../constants/QueryUtils"
 * QueryUtils.restructureProjectData(data);
 *
 */
export class QueryUtils {
  static syncLinkedCategoryRecords = (allContent, allCategories) => {
    if (!allContent) return [];

    let recordsWithPopulatedLinks = allContent.map((item) => {

      let linkedItem = item;
      let itemLinkedCategories = [];

      if (!item.fields.Categories) {
        return linkedItem;
      } else {
        item.fields.Categories.map((itemCat) => {
          let matchedCategories = allCategories.filter((cat) => itemCat === cat.id);

          matchedCategories.map((matchedCat) => {
            itemLinkedCategories.push(matchedCat);
          })
        })

        linkedItem = {
          ...item,
          fields: {
            ...item.fields,
            Categories: itemLinkedCategories
          }
        }

        return linkedItem;
      }

    });

    

    return recordsWithPopulatedLinks;
  };

  /**
   *
   * @name loadAllRecords
   * @returns All of our records.
   * Load all of our records.
   *
   */
  static loadAllRecords = () => {
    return Airtable(AirtableUtils.allRecords.tableName)
      .select({
        maxRecords: AirtableUtils.maxRecords,
        view: AirtableUtils.allRecords.viewName,
      })
      .all()
      .then((record: any) => {
        let unserializedRecord = record;
        let stringifiedRecord = JSON.stringify(unserializedRecord);
        let serializedRecord = JSON.parse(stringifiedRecord);

        return serializedRecord;
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  /**
   *
   * @name loadAllCategories
   * @returns All of our categories.
   * Load all of our categories.
   *
   */
   static loadAllCategories = () => {
    return Airtable(AirtableUtils.allCategories.tableName)
      .select({
        maxRecords: AirtableUtils.maxRecords,
        view: AirtableUtils.allCategories.viewName,
      })
      .all()
      .then((record: any) => {
        let unserializedRecord = record;
        let stringifiedRecord = JSON.stringify(unserializedRecord);
        let serializedRecord = JSON.parse(stringifiedRecord);

        return serializedRecord;
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  /**
   *
   * @name initAppData
   * @description Load all of our data.
   * @returns All of our available data.
   *
   */
  static initAppData = async (preview: boolean) => {
    // Load all Airtable content
    let allContent = await QueryUtils.loadAllRecords();
    let allCategories = await QueryUtils.loadAllCategories();
    let _allContentWithLinkedData = QueryUtils.syncLinkedCategoryRecords(allContent, allCategories);

    /**
     *
     * Return our Server Data
     *
     */
    return {
      props: {
        // Export Airtable Content
        allContent: _allContentWithLinkedData,
        allCategories: allCategories
      },
    };
  };
}
