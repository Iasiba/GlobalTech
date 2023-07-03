const uuid = require("uuid");

const Projects = require("../models/projects.model");
const Users = require ("../models/users.model")
const Rooms = require("../models/rooms.model")
const Accounts = require("../models/accounts.model")
const Backup = require("../models/backups.models")
const Materials = require("../models/materials.model")
const Task = require("../models/tasks.model")
const Activities = require("../models/activities.model")
const getAll = async () => {
  const res = await Projects.findAll({
    include: [
      {
        model: Users//,
        //as:owner
      },
      {
        model: Rooms
        , include: [{ model: Task , include: Activities }]
      },
      {
        model:Accounts
      },
      {
        model: Backup
      },
      {
        model: Materials
      }
    ],
  })
  return res
};

const getById = async (id) => {
  const res = await Projects.findOne({
    where: { id },
    include: [
      {
        model: Users
        //,as: owner
      },
      {
        model: Rooms
      },
      {
        model:Accounts
      },
      {
        model: Backup
      },
      {
        model: Materials
      }
    ],
  });
  return res;
};

const create = async (data, userId) => {
  const newProject = await Projects.create({
    id: uuid.v4(),
    userId: userId,
    name:data.name,
    address:data.address,
    coordinates:data.coordinates,
    reference:data.reference||'',
    city:data.city||'Monterrey',
    state:data.state||'Nuevo Leon',
    country:data.country||'Mexico',
    plane:data.plane
  })
  return newProject;
};

const edit = async (projectId, data,userRol) => {
  let res = null
  const {userId,id, ...restofproperties}=data
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Projects.update(
      { ...restofproperties },
      { where: { id: projectId } }
    )
  }
  return res
};

const remove = async (id) => {
  const projectDeleted = await Projects.destroy({
    where: {
      id: id,
    },
  });
  return projectDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove
}