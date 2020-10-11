const mongoose = require("mongoose");
const { User } = require("../models");

module.exports = {
  validateUserId(request, response, next){
    const { id } = request.params

    if (mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ error: "Invalid user ID." })
    }

    next();
  },
  async validateUserExist(request, response, next) {
    const { id } = request.params

    const userExists = await User.findById(id)

    if (!userExists) {
      return response.status(400).json({ error: 'User does not exists. ' })
    }

    next()
  }
};
