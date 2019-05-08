const fs = require("fs");

const data = JSON.parse(
  fs.readFileSync(
    "/Users/baldipshergill/Desktop/playDatabase/db/data/compiledData.json",
    "utf8"
  )
);

exports.seed = function(knex, Promise) {
  return knex
    .insert(data)
    .into("historical_services")
    .returning("*");
};
