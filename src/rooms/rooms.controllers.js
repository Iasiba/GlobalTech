const uuid = require("uuid");

const rooms = require("../models/rooms.model");
const project = require("../models/projects.model");
const Tasks = require("../models/tasks.model");

const getAll = async () => {
  const res = await rooms.findAll({
    include: [
      {
        model: project
      },
      {
        model: Tasks
      }
    ],
  })
  return res
}
const getById = async (id) => {
  const res = await rooms.findOne({
    where: { id },
    include: [
      {
        model: project
      },
      {
        model: Tasks
      }
    ],
  });
  return res;
}
const getByProjectId = async (projectId) => {
  const res = await rooms.findAll({
    where: { projectId : projectId }
  })
  return res;
}
const create = async (data,projectId) => {
  const newRoom = await rooms.create({
    id: uuid.v4(),
    name: data.name,
    projectId: projectId
  })
  return newRoom;
}
const edit = async (id, data) => {
  let res = null
  console.log("entrooooooooooooooooooooooooo")
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await rooms.update(
      { data },
      { where: { id: id } }
    )
  }
  return res
};

const remove = async (id) => {
  const roomDeleted = await rooms.destroy({
    where: {
      id: id,
    },
  });
  return roomDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  getByProjectId,
  edit,
  remove
}