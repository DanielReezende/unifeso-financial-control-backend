const { User } = require("../models");

module.exports = {
  async index(request, response) {
    const users = await User.find()

    return response.json(users)
  },
  async show (request, response) {
    const { id } = request.params;

    const user = await User.find({ _id: id });

    return response.status(200).json(user)
  },
  async store(request, response) {
    const { username, password } = request.body;

    const userExists = await User.findOne({ username });
 
    if(userExists) return response.json(userExists)

    const createUser = { username, password }

    const user = await User.create(createUser);

    return response.status(201).json({ user })
  },
  async update(request, response){
    const { id } = request.params;
    const { username, password } = request.body;

    const userAltered = await User.findByIdAndUpdate(id, { username, password })

    return response.json(userAltered)
  },
  async destroy(request, response){
    const { id } = request.params;
    
    await User.findByIdAndDelete(id)

    return response.json({ message: 'User successfully deleted' })
  }
}