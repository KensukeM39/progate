import * as fs from "node:fs/promises";

fs.readFile("./src/data/user6.json", "utf-8")
  .then(file => {
    // 1
    console.log(file);
  })
  .catch(err => {
    // 2
    console.error(err.message);
  });
