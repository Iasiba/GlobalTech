const uuid = require("uuid");

const Pendings = require("../models/pendings.model");
const Tasks = require ("../models/tasks.model")

const getAll = async () => {
  const res = await Pendings.findAll({
    include: [
      {
        model: Tasks
      }
    ],
  })
  return res
};

const getById = async (id) => {
  const res = await Pendings.findOne({
    where: { id },
    include: [
      {
        model: Tasks
      }
    ],
  });
  return res;
};

const create = async (data,taskId) => {
  const newMaterial = await Pendings.create({
    id: uuid.v4(),
    description:data.description,
    taskId: taskId
  })
  return newMaterial;
};

const edit = async (id, data, userRol) => {
  let res = null
  const {taskId,createdAt,updatedAt, ...restofproperties}=data
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol|| //admin
      "5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//tecnicos y programadores
    res = await Pendings.update(
      { restofproperties },
      { where: { id: id } }
    )
  }
  return res
};

const remove = async (id) => {
  const pendingsDeleted = await Pendings.destroy({
    where: {
      id: id,
    },
  });
  return pendingsDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove
}