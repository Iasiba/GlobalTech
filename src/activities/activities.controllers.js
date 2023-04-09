const uuid = require("uuid");

const Activities = require("../models/activities.model");
const Tasks = require("../models/tasks.model")
const Projects = require("../models/projects.model");
const Rooms = require("../models/rooms.model");
const Users = require("../models/users.model")

const getAll = async () => {
  const res = await Activities.findAll({
    include: [
      {
        model: Tasks,
        include: [{ model: Rooms, include: Projects }]
      },
      {
        model: Users
      }
    ],
  })
  return res
}

const getById = async (id) => {
  const res = await Activities.findOne({
    where: { id },
    include: [
      {
        model: Tasks,
        include: [{ model: Rooms, include: Projects }]
      },
      {
        model: Users
      }
    ],
  });
  return res;
}

const getByUserId = async (userId) => {
  const res = await Activities.findAll({
    where: { userId },
    include: [
      {
        model: Tasks,
        include: [{ model: Rooms, include: Projects }]
      },
      {
        model: Users
      }
    ],
  });
  return res;
}

const getByTaskId = async (taskId) => {
  const res = await Activities.findAll({
    where: { taskId },
    include: [
      {
        model: Tasks,
        include: [{ model: Rooms, include: Projects }]
      },
      {
        model: Users
      }
    ]
  });
  return res;
}

const create = async (data, taskId, userId) => {
  const newActivity = await Activities.create({
    id: uuid.v4(),
    description: data.description,
    taskId: taskId,
    userId: userId
  })
  return newActivity;
}

const edit = async (id, data, userRol) => {
  let res = null
  const { taskId, createdAt, updatedAt, ...restofproperties } = data
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol || //admin
    "5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//tecnicos y programadores
    res = await Activities.update(
      { taskId,...restofproperties },
      { where: { id: id } }
    )
  }
  return res
}

const remove = async (id) => {
  const activityDeleted = await Activities.destroy({
    where: {
      id: id,
    },
  })
  return activityDeleted;
}

const removeByTaskId = async (taskId) => {
  const activityDeleted = await Activities.destroy({
    where: {
      taskId,
    },
  })
  return activityDeleted;
}
module.exports = {
  getAll,
  create,
  getById,
  getByTaskId,
  getByUserId,
  edit,
  remove,
  removeByTaskId
}