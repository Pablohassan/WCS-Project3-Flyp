const express = require("express");

const {
  ImagesCardListController,
  ItemController,
  CardListController,
  LoginController,
} = require("./controllers");

const router = express.Router();
router.get("/me", LoginController.me);
router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get(
  "/cardlist",
  CardListController.browse,
  ImagesCardListController.browse
);
router.post("/login", LoginController.login);

router.get("/logout", function Logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      res.sendStatus(401);
    }

    res.sendStatus(204);
  });
});

module.exports = router;
