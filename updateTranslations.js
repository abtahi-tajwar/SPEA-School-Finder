const fs = require("fs");
var CSVParse = require("csv-parse");
// import fs from 'fs'
// import { parse } from 'csv-parse';

// console.log(parse)
fs.readFile("./translations.csv", function (err, fileData) {
  CSVParse.parse(
    fileData,
    { columns: false, trim: true },
    function (err, rows) {
      // Your CSV data is in an array of arrys passed to this callback as rows.
      const finalObject = {};
      rows.forEach((row) => {
        finalObject[row[0].trim().toLowerCase()] = row[1];
      });
      fs.writeFile("src/translations.json", JSON.stringify(finalObject), (err) => {
        if (err) console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });
    }
  );
});
