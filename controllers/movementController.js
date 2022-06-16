const { Movement } = require("../models");

async function index(req, res) {
  const movements = await Movement.findAll();
  res.json(movements);
}

async function show(req, res) {
  const id = req.params.id;
  const movement = await Movement.findAll({ where: { id: id } });
  res.json(movement);
}

async function store(req, res) {
  const { type, description, amount } = req.body;
  const movemet = await Movement.create({
    type: type,
    description: description,
    amount: amount,
  });
  res.json(movemet);
}

async function update(req, res) {}

async function destroy(req, res) {
  const id = req.params.id;
  const movement = await Movement.destroy({
    where: {
      id: id,
    },
  });
  res.json({ message: "movimiento eliminado" });
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
