export default {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    { name: "title", title: "Ttitle", type: "string" },
    { name: "about", title: "About", type: "string" },
    { name: "destination", title: "Destination", type: "url" },
    { name: "category", title: "Category", type: "string" },
    {
      // options: hotspot enables to responsively adapt the images to different aspect ratios at display time.
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "userId",
      title: "UserId",
      type: "string",
    },
    {
      // Type postedBy: Sanity is smart enough this is going to be a reference to another document
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy",
    },
    {
      name: "save",
      title: "Save",
      type: "array",
      of: [{ type: "save" }],
    },
    {
      name: "comment",
      title: "Comment",
      type: "array",
      of: [{ type: "comment" }],
    },
  ],
};
