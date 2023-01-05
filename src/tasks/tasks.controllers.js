const uuid = require("uuid");

const tasks = require("../models/tasks.model")
const TaskImages = require("../models/tasksImages.models")
const Rooms = require("../models/rooms.model");
const Users = require("../models/users.model");
const Activities = require("../models/activities.model");
const Projects = require("../models/projects.model")

const getAll = async () => {
  const res = await tasks.findAll({
    include: [        //esto muestra usuario creador y habitacion a la que pertenece y  
      {
        model: Rooms
        ,include: Projects
      },
      {
        model: Users
      },
      {
        model: Activities
      },
      {
        model: TaskImages
      }
    ],
  })
  return res
}

const getById = async (id) => {
  const res = await tasks.findOne({
    where: { id },
    include: [
      {
        model: Rooms
        ,include: Projects
      },
      {
        model: Users
      },
      {
        model: Activities
      },
      {
        model: TaskImages
      }
    ],
  });
  return res;
}

const getByUser = async (userId) => {
  const res = await tasks.findAll({
    where: { userId: userId },
    include: [   
      {
        model: Rooms
        ,include: Projects
      },
      {
        model: Users
      },
      {
        model: Activities
      },
      {
        model: TaskImages
      }
    ]
  });
  return res;
}

const getByRoomId = async (roomId) => {
  const res = await tasks.findAll({
    where: { roomId: roomId },
    include: [
      {
        model: Rooms
        ,include: Projects
      },
      {
        model: Users
      },
      {
        model: Activities
      },
      {
        model: TaskImages
      }
    ]
  });
  return res;
}

const create = async (data, userId,roomId) => {
  const newTask = await tasks.create({
    id: uuid.v4(),
    userId: userId,
    roomId: roomId,
    description: data.description,
    observation:data.observation||'',
    material:data.material||'',
    isfinished:data.isfinished,
    iscanceled:data.iscanceled,
    executionDate: data.executionDate
  })
  return newTask;
}

const edit = async (id, data,userId,userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await tasks.update(
      { userId,...data },
      { where: { id: id } }
    )
  } else {
    const { roomId, description, userId, ...restofproperties } = data
    const userdesignated = getById(id)
    if (userId === userdesignated.userId) {
      res = await tasks.update(
        { restofproperties },
        { where: { id: id } }
      )
    }
  }
  return res
}

const remove = async (id) => {
  const taskDeleted = await tasks.destroy({
    where: {
      id: id,
    },
  });
  return taskDeleted;
}

module.exports = {
  getAll,
  create,
  getById,
  getByUser,
  getByRoomId,
  edit,
  remove
}