const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "User";
}

module.exports = UserManager;
