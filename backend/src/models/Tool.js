const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema(
  {
    title: String,
    link: String,
    description: String,
    tags: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tool", ToolSchema);
