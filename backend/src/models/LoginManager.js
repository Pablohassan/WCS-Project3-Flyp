const AbstractManager = require("./AbstractManager");

class LoginManager extends AbstractManager {
  static table = "utilisateurs";

  findByEmail(email) {
    return this.connection.query(
      `select * from ${LoginManager.table} where email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${LoginManager.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
  }
}

module.exports = LoginManager;
