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
};

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
};

const create = async (data) => {
  const newRoom = await rooms.create({
    id: uuid.v4(),
    Name: data.Name,
    projectId: data.projectId
  })
  return newRoom;
};

const edit = async (id, data) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await rooms.update(
      { ...data },
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
  edit,
  remove
}