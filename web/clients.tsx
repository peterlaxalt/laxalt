import airtableClient from "airtable";


export const AirtableUtils = {
  baseUrl: "https://airtable.com/",
  apiKey: "keySE7sknWhmqvd7Q",
  baseId: "app7SPWcNnXv9QaHG",
  maxRecords: 2000,
  allRecords: {
    viewName: "Grid",
    tableName: "__Posts",
  },
  allCategories: {
    viewName: "Grid",
    tableName: "__Categories",
  },
};

/**
 *
 * @name Airtable
 * @returns Airtable Data
 * Our Airtable client to load data.
 *
 */
 export const Airtable = new airtableClient({
  apiKey: AirtableUtils.apiKey,
}).base(AirtableUtils.baseId);
