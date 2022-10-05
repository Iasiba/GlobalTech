const uuid = require("uuid");

const Activities = require("../models/activities.model");
const Tasks = require ("../models/tasks.model")

const getAll = async () => {
  const res = await Activities.findAll({
    include: [
      {
        model: Tasks
      }
    ],
  })
  return res
};

const getById = async (id) => {
  const res = await Activities.findOne({
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
  const newMaterial = await Activities.create({
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
    res = await Activities.update(
      { restofproperties },
      { where: { id: id } }
    )
  }
  return res
};

const remove = async (id) => {
  const pendingsDeleted = await Activities.destroy({
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