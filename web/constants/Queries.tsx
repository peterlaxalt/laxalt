/**
 *
 * Queries.tsx:
 * @author Peter Laxalt
 * @description
 * This file is primarily used to manage our site's queries and the
 * manipulation of data that comes with them.
 *
 */

 import { Airtable, AirtableUtils, } from "../clients";
 
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
         // Selecting the first 3 records in Kylie Grid:
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
    * @name initAppData
    * @description Load all of our data.
    * @returns All of our available data.
    *
    */
   static initAppData = async (preview: boolean) => { 
     // Load all Airtable content
     let allContent = await QueryUtils.loadAllRecords();

     /**
      *
      * Return our Server Data
      *
      */
     return {
       props: {
         // Export Airtable Content
         allContent: allContent
       },
     };
   };
 }