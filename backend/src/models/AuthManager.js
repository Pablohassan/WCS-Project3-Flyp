const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  static table = "utilisateurs";

  findByEmail(email) {
    return this.connection.query(
      `select * from ${AuthManager.table} where email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${AuthManager.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
  }
}

module.exports = AuthManager;
