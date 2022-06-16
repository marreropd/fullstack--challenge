const { User } = require("../models");

async function index(req, res) {
  const users = await User.findAll();
  res.json(users);
}

async function show(req, res) {
  const id = req.params.id;
  const user = await User.findAll({ where: { id: id } });
  res.json(user);
}

async function store(req, res) {
  const { name, password } = req.body;
  const user = await User.create({
    name: name,
    password: password,
  });
  res.json(user);
}

async function update(req, res) {}

async function destroy(req, res) {
  const id = req.params.id;
  const user = await User.destroy({
    where: {
      id: id,
    },
  });
  res.json({ message: "usuario eliminado" });
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
