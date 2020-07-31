const express = require("express");
const ToolController = require("./controllers/ToolController");

const routes = new express.Router();

routes.get("/", (req, res) => {
  return res.json({
    name: "bossabox-challenge-api",
    status: "up"
  });
});

// Tools
routes.get("/tools", ToolController.index);
routes.post("/tools", ToolController.store);
routes.delete("/tools/:id", ToolController.remove);

module.exports = routes;
