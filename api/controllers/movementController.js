const { Movement } = require("../models");

async function index(req, res) {
  const movements = await Movement.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.json(movements);
}
async function indexByQuery(req, res) {
  const query = req.query.type;
  const movements = await Movement.findAll({
    order: [["createdAt", "DESC"]],
    where: { type: query },
  });
  res.json(movements);
}
async function show(req, res) {
  const id = req.params.id;
  const movement = await Movement.findAll({ where: { id: id } });
  res.json(movement);
}

async function store(req, res) {
  const { type, description, amount, category } = req.body;
  const movemet = await Movement.create({
    type: type,
    description: description,
    amount: amount,
    category: category,
  });
  res.json(movemet);
}

async function update(req, res) {
  console.log(req.params.id);
  const id = req.params.id;
  const { amount, type, description, category } = req.body;
  const movement = await Movement.update(
    { amount: amount, description: description, type: type, category: category },
    {
      where: {
        id: id,
      },
    },
  );

  const updatedMovement = await Movement.findAll({ where: { id: id } });
  res.json(updatedMovement);
}

async function destroy(req, res) {
  const id = req.params.id;
  const movement = await Movement.destroy({
    where: {
      id: id,
    },
  });
  const deletedMovement = await Movement.findAll({ where: { id: id } });
  res.json(deletedMovement);
}

module.exports = {
  index,
  indexByQuery,
  show,
  store,
  update,
  destroy,
};
