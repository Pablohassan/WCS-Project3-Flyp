const bcrypt = require("bcrypt");
const Joi = require("joi");
const models = require("../models");

class AuthController {
  /**
   * Retourne l'utilisateur connecté
   */
  static me = async (req, res) => {
    const { user } = req.session;

    if (!user) {
      res.sendStatus(401);
      return;
    }

    res.send(user);
  };

  static login = async (req, res) => {
    // récupérer les données du POST (nickname, password)
    const { email, password } = req.body;

    // valider les données avec Joi
    const validation = Joi.object({
      email: Joi.string().min(3).max(255).required(),
      password: Joi.string().min(6).max(255).required(),
    }).validate({ email, password }, { abortEarly: false });

    // si données ne sont pas valide on retourne un code 400 Bad request
    if (validation.error) {
      res.status(400).send("Email or password incorrect");
      return;
    }

    //  récupérer l'utilisateur possédant cet email
    const user = await models.User.find({ where: { email } });

    // si l'utilisateur n'existe pas, on renvoi un code 401 Unauthorized
    if (!user) {
      res.sendStatus(401);
      return;
    }

    if (await bcrypt.compare(password, user.password.replace("$2y", "$2b"))) {
      delete user.password;
      req.session.user = user;
      res.send(user);
    } else {
      res.sendStatus(401);
    }
  };

  static logout = (req, res) => {
    req.session.destroy(() => {
      res.sendStatus(204);
    });
  };
}

module.exports = AuthController;
