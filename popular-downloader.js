//################# ADVANCED ##################
const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
const beautify = require("json-beautify");
const dataPath = path.join(__dirname, "./downloads");
let articlesArr = [];

rp("https://reddit.com/r/popular.json")
  .then((res) => {
    let main = JSON.parse(res);
    main.data.children.forEach((article) => {
      let end = path.extname(`${article.data.url}`).toLowerCase();
      let id = `${article.data.id}`;
      let fileName = `${dataPath}/${id}${end}`;
      if (end === ".png" || end === ".jpg" || end === ".gif") {
        rp({
          uri: `${article.data.url}`,
          resolveWithFullResponse: true,
          encoding: null
        })
          .then((resNew) => {
            fs.writeFile(fileName, resNew.body, "binary", (err) => {
              if (err) console.log(err);
            });
          })
          .catch((err) => {
            if (err) console.log(err);
        });
      }
    });
  })

  .catch((err) => {
    if (err) console.log(err);
  });
