const uuid = require("uuid");

const Inventories = require("../models/inventories.model")
const Materials = require("../models/inventories.model")

const getAll = async () => {
  const res = await Inventories.findAll({
    include: [
      {
        model: Materials
      }
    ],
  })
  return res
}

const getById = async (id) => {
  const res = await Inventories.findOne({
    where: { id },
    include: [
      {
        model: Materials
      }
    ],
  });
  return res;
}

const create = async (data) => {
  const newInventory = await Inventories.create({
    id: uuid.v4(),
    name:data.name
  })
  return newInventory;
}

const edit = async (id, data,userRol) => {
  let res = null
  const {createdAt,updatedAt, ...restofproperties}=data
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Inventories.update(
      { restofproperties },
      { where: { id: id } }
    )
  }
  return res
}

const remove = async (id) => {
  const materialDeleted = await Inventories.destroy({
    where: {
      id: id,
    },
  });
  return materialDeleted;
}

module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove
}