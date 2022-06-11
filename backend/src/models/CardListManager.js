const AbstractManager = require("./AbstractManager");

class CardListManager extends AbstractManager {
  static table = "contenu";

  insert(contenu) {
    return this.connection.query(
      `insert into ${CardListManager.table} (title) values (?)`,
      [contenu.title]
    );
  }

  update(contenu) {
    return this.connection.query(
      `update ${CardListManager.table} set title = ? where id = ?`,
      [contenu.title, contenu.id]
    );
  }
}

module.exports = CardListManager;
