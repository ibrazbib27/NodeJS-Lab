//################# PART 2 ##################
const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
const beautify = require("json-beautify");
const dataPath = path.join(__dirname, "./popluar-articles.json");
let articlesArr = [];

rp("https://reddit.com/r/popular.json")
  .then((res) => {
    let main = JSON.parse(res);
    main.data.children.forEach((article) => {
      let obj = {
        title: `${article.data.title}`,
        url: `${article.data.url}`,
        author: `${article.data.author}`,
      };
      articlesArr.push(obj);
      fs.writeFile(dataPath, beautify(articlesArr, null, 2, 80), (err) => {
        if (err) console.log(err);
      });
    });
  })
  .catch((err) => {
    if (err) console.log(err);
  });
