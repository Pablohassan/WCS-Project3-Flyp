const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const connection = new PrismaClient();

const models = fs
  .readdirSync(__dirname)
  .filter((file) => file !== "AbstractManager.js" && file !== "index.js")
  .reduce((acc, file) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const Manager = require(path.join(__dirname, file));

    // eslint-disable-next-line no-param-reassign
    acc[Manager.table] = new Manager(connection, Manager.table);

    return acc;
  }, {});

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
