/**
 *
 * @name Article Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Article Data Model
 *
 */

// __________________________________________________________________________________________

export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "state",
      type: "string",
      options: {
        list: [
          { title: "✏️ In Progress", value: "draft" },
          { title: "👀 Needs review", value: "review" },
          { title: "⏱ Awaiting publication", value: "awaiting" },
          { title: "✅ Published", value: "published" }
        ],
        layout: "dropdown"
      }
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ]

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage"
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`
  //     });
  //   }
  // }
};

// __________________________________________________________________________________________
