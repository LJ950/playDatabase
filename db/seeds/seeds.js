const fs = require("fs");

const data = JSON.parse(
  fs.readFileSync(
    "/home/luke/northcoders/ontrack/playDatabase/db/data/compiledData.json",
    "utf8"
  )
);

exports.seed = function(knex, Promise) {
  return knex
    .insert(data)
    .into("historical_services")
    .returning("*");
};
