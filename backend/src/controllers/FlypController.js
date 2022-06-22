const models = require("../models");

class FlypController {
  static browse = async (req, res) => {
    try {
      const [flyps] = await models.contenu.findAll();
      res.send(flyps);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
}

module.exports = FlypController;
