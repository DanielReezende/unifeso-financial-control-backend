const { User } = require("../models");

module.exports = {
  async store(request, response) {
    const { username, password } = request.body;

    const createUser = { username, password }

    const user = await User.create(createUser);

    return response.status(201).json({ user })
  },
  
}