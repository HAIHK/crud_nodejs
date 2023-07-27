import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  // router.get("/detail/user/:userId", homeController.getDetailpage);
  router.get("/detail/user/:id", homeController.getDetailpage);

  router.post("/create-new-user", homeController.createNewUser);

  router.get("/edit-user/:id", homeController.getEditpage);

  router.post("/delete-user", homeController.deleteUser);

  router.post("/update-user", homeController.updateUser);

  router.get("/about", (req, res) => {
    res.send(`I'm Hello word`);
  });

  return app.use("/", router);
};

export default initWebRoute;
