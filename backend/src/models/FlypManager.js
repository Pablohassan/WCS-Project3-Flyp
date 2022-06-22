const AbstractManager = require("./AbstractManager");

class FlypManager extends AbstractManager {
  static table = "contenu";

  insert(contenu) {
    return this.connection.query(
      `insert into ${FlypManager.table} (title) values (?)`,
      [contenu.title]
    );
  }

  update(contenu) {
    return this.connection.query(
      `update ${FlypManager.table} set title = ? where id = ?`,
      [contenu.title, contenu.id]
    );
  }
}

module.exports = FlypManager;
