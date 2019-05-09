const ENV = process.env.NODE_ENV === "test" ? "test" : "development";

const development = require("./compileData");
const test = require("./compileData");

const data = {
  development,
  test,
  production: development
};

module.exports = data[ENV];
