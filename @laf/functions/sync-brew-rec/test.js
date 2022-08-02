const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "",
});

(async () => {
  const response = await notion.databases.create({
    title: [
      {
        type: "text",
        text: {
          content: "coffee note",
          link: null,
        },
      },
    ],
    parent: {
      page_id: "41e0fc46100f47a4812d6c204eaec58e",
    },
    properties: {
      item_name: { title: {} },
      item_price: { number: {} },
      item_tags: {
        multi_select: {
          options: [
            { name: "Best Selling", color: "orange" },
            { name: "Starters", color: "pink" },
            { name: "Main Course", color: "brown" },
            { name: "Drinks", color: "blue" },
            { name: "Desserts", color: "purple" },
          ],
        },
      },
      item_image: { files: {} },
    },
  });
  console.log(response);
})();
