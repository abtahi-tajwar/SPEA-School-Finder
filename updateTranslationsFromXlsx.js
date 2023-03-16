const fs = require("fs");
const xlsx = require("node-xlsx");
// Or var xlsx = require('node-xlsx').default;
// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/translations.xlsx`);
const finalObject = {};
workSheetsFromFile[0].data.forEach((row) => {
  finalObject[row[0].trim().toLowerCase()] = row[1];
});
fs.writeFile("src/translations.json", JSON.stringify(finalObject), (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully\n");
  }
});
