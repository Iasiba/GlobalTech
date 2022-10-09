const uuid = require("uuid");
const { hashPassword } = require("../utils/crypt");

const taskImages = require("../models/tasksImages.models");
const task= require("../models/tasks.model")

const getAll = async () => {
  const res = await taskImages.findAll({
    include: [
      {
        model: task
      }
    ]
  })
  return res
}

const getById = async (id,userId) => {//solo admins y propietario
  const res = await taskImages.findOne({
    where: { id },
    include: [
      {
        model: task
      }
    ]
  });
  return res;
}

const getByTaskId = async (taskId) => {
  const res = await taskImages.findAll({
    where: { taskId }
  });
  return res;
}

const create = async (data,imgPath,taskId) => {
  const newuserImages = await taskImages.create({
    id: uuid.v4(),
    name:data.name,
    url: imgPath,          //HAY QUE CREAR BIEN LA RUTA
    taskId: taskId
  })
  return newuserImages;
}

const edit = async (id, data, userId,userRol) => {//verificar si es propietario
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await taskImages.update(
      { ...data },
      { where: { id: id } }
    )
  } else {//hay que verificar que sea el propietario de la imagen
    res = await taskImages.update(
      data,
      { where: { id: id }, }
    )
  }
  return res
}

const remove = async (id) => {
  const taskImageDeleted = await taskImages.destroy({
    where: {
      id: id,
    },
  });
  return taskImageDeleted;
}

module.exports = {
  getAll,
  create,
  getById,
  getByTaskId,
  edit,
  remove
}