const uuid = require("uuid");

const Materials = require("../models/materials.model");
const Users = require ("../models/user.model")
const Inventories = require("../models/inventories.model");

const getAll = async () => {
  const res = await Materials.findAll({
    include: [
      {
        model: Users
      },
      {
        model: Inventories
      }
    ],
  })
  return res
}

const getById = async (id) => {
  const res = await Materials.findOne({
    where: { id },
    include: [
      {
        model: Users
      },
      {
        model: Inventories
      }
    ],
  });
  return res;
}

const getByInventoryId = async (inventoryId) => {
  const res = await Materials.findAll({
    where: { inventoryId }
  });
  return res;
}

const create = async (data,inventoryId) => {
  console.log(data,"     ",inventoryId)
  const newMaterial = await Materials.create({
    id: uuid.v4(),
    name:data.name,
    amount:data.amount,
    userId: data.userId,
    inventoryId:inventoryId,
    projectId: data.projectId
  })
  return newMaterial;
}

const edit = async (materialId, data,userRol) => {
  let res = null
  const {userId,projectId, ...restofproperties}=data
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Materials.update(
      { userId ,...data },
      { where: { id: materialId } }
    )
  }
  if ("97006fe0-4a35-47f4-bfbf-fc962e5fe500" === userRol) {//tecnico
    res = await Materials.update(
      { ...restofproperties },
      { where: { id: materialId } }
    )
  }
  return res
}

const remove = async (id) => {
  const materialDeleted = await Materials.destroy({
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
  getByInventoryId,
  edit,
  remove
}