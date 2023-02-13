const uuid = require("uuid");

const MaterialList = require("../models/material.list.model");
const Users = require("../models/users.model")
const Materials = require("../models/materials.model")

const getAll = async () => {
  const res = await MaterialList.findAll({
    include: [
      {
        model: Users
      },
      {
        model: Materials
      }
    ],
  })
  return res
};

const getById = async (id) => {
  const res = await MaterialList.findOne({
    where: { id },
    include: [
      {
        model: Users
      },
      {
        model: Materials
      }
    ]
  });
  return res;
};

const getByUserId = async (userId) => {
  const res = await MaterialList.findAll({
    where: { userId },
    include: [
      {
        model: Users
      },
      {
        model: Materials
      }
    ]
  });
  return res;
};

const create = async (data, userId) => {
  const newMaterialList = await MaterialList.create({
    id: uuid.v4(),
    materialId: data.materialId,
    userId: data.userId,
  })
  return newMaterialList;
};

const edit = async (id, data, userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await MaterialList.update(
      { ...data },
      { where: { id: id } }
    )
  } else {
    res = await MaterialList.update(
      { ...data },
      { where: { id: id }, }
    )
  }
  return res
};

const remove = async (id) => {
  const materilalListDeleted = await MaterialList.destroy({
    where: {
      id: id,
    },
  });
  return materilalListDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  getByUserId,
  edit,
  remove
}