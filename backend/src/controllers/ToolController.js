const Tool = require("../models/Tool");

module.exports = {
  async index(req, res) {
    let tool = {};
    if (typeof req.query.tag !== "undefined") {
      let tag = req.query.tag;
      tool = await Tool.find({ tags: { $in: [tag] } });
      return res.json(tool);
    } else {
      tool = await Tool.find().sort("-createdAt");
    }

    return res.json(tool);
  },

  async store(req, res) {
    let tool = await Tool.create(req.body);
    return res.json(tool);
  },

  async remove(req, res) {
    await Tool.findByIdAndRemove(req.params.id);
    return res.json({});
  }
};
