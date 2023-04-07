const uuid = require("uuid");

const TaskList = require("../models/task.list.model");
const Users = require("../models/users.model")
const Tasks = require("../models/tasks.model")
const Projects = require("../models/projects.model")
const Rooms = require("../models/rooms.model")
const Activities = require("../models/activities.model")
const TaskImages = require("../models/tasksImages.models")

const getAll = async () => {
  const res = await TaskList.findAll({
    include: [
      {
        model: Users
      },
      {
        model: Tasks
      }
    ],
  })
  return res
};

const getById = async (id) => {
  const res = await TaskList.findOne({
    where: { id },
    include: [
      {
        model: Users
      },
      {
        model: Tasks
      }
    ]
  });
  return res;
};

const getByUserId = async (userId) => {
  console.log("entro", userId)
  const res = await TaskList.findAll({
    where: { userId },
    include: [
      {
        model: Users
      },
      {
        model: Tasks
        , include: [        //esto muestra usuario creador y habitacion a la que pertenece y  
        {
          model: Rooms
          ,include: [{model:Projects,include:Rooms}]
        },
        {
          model: Users
        },
        {
          model: Activities
        },
        {
          model: TaskImages
        },
        {
          model: TaskList
        }
      ]/*include: [{
          model: Rooms
          , include: [{ model: Projects, include: Rooms }]
        }]*/
      }
    ]
  });
  return res;
};

const create = async (data, userId) => {
  const newTaskList = await TaskList.create({
    id: uuid.v4(),
    taskId: data.taskId,
    userId: data.userId,
  })
  return newTaskList;
};

const edit = async (id, data, userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await TaskList.update(
      { ...data },
      { where: { id: id } }
    )
  } else {
    res = await TaskList.update(
      { ...data },
      { where: { id: id }, }
    )
  }
  return res
};

const remove = async (id) => {
  const taskListDeleted = await TaskList.destroy({
    where: {
      id: id,
    },
  });
  return taskListDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  getByUserId,
  edit,
  remove
}