const express = require("express");

const { FlypController, AuthController } = require("./controllers");

const router = express.Router();

router.get("/me", AuthController.me);
router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);

router.get("/flyps", FlypController.browse);

module.exports = router;
