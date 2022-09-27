const uuid = require("uuid");

const tasks = require("../models/tasks.model");
const Rooms = require("../models/rooms.model");
const Users = require("../models/user.model");

const getAll = async () => {
  const res = await tasks.findAll({
    include: [
      {
        model: Rooms
      },
      {
        model: Users
      }
    ],
  })
  return res
};

const getById = async (id) => {
  const res = await tasks.findOne({
    where: { id },
    include: [
      {
        model: Rooms
      },
      {
        model: Users
      }
    ],
  });
  return res;
};

const create = async (data, userId, creatorId) => {
  const newTask = await tasks.create({
    id: uuid.v4(),
    userId: userId,
    description: data.description,
    creatorId: creatorId,
    roomId: data.roomId,
    executionDate: data.executionDate
  })
  return newTask;
};

const edit = async (id, data) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await tasks.update(
      { ...data },
      { where: { id: id } }
    )
  } else {
    const { roomId, creatorId, description, userId, ...restofproperties } = data
    const userdesignated = getById(id)
    if (userId === userdesignated.userId) {
      res = await tasks.update(
        { restofproperties },
        { where: { id: id } }
      )
    }
  }
  return res
};

const remove = async (id) => {
  const taskDeleted = await tasks.destroy({
    where: {
      id: id,
    },
  });
  return taskDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove
}