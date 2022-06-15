const bcrypt = require("bcrypt");
const Joi = require("joi");
const models = require("../models");

class LoginController {
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

    //  récupérer l'utilisateur possédant ce nickname
    const [data] = await models.utilisateurs.findByEmail(email);

    // si l'utilisateur n'existe pas, on renvoi un code 401 Unauthorized
    if (data.length === 0) {
      res.sendStatus(401);
      return;
    }

    const user = data[0];

    // On compare si le mot de passe récupéré (depuis les données POST) est le même quel e MDP de l'utilisateur récupéré.
    // si les MDP correspondent on retourne l'utilisateur sans le Mdp
    if (await bcrypt.compare(password, user.password)) {
      // on supprime le mdp de l'objet utilisateur à renvoyer et
      // on renvoie l'utilisateur récupéré, mais sans le mot de passe
      const { password: _, ...response } = user;
      res.send(response);
    } else {
      res.sendStatus(401);
    }
  };
}

module.exports = LoginController;
