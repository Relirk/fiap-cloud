const express = require("express");
const ToolController = require("./controllers/ToolController");

const routes = new express.Router();

routes.get("/", (req, res) => {
  return res.json({
    name: "fiap-cloud-api",
    status: "up",
    server: "ngix",
    EC2_Instance: "i-05eda5c5eb499d94a",
    EC2_Security_Group: "launch-wizard-3"
  });
});

// Tools
routes.get("/tools", ToolController.index);
routes.post("/tools", ToolController.store);
routes.delete("/tools/:id", ToolController.remove);

module.exports = routes;
