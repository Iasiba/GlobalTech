const uuid = require("uuid");

const Backup = require("../models/backups.models");
const Projects = require("../models/projects.model");
const Users = require("../models/user.model")

const getAll = async () => {
  const res = await Backup.findAll({
    include: [
      {
        model: Users
      },
      {
        model: Projects
      }
    ],
  })
  return res
};

const getById = async (id) => {
  const res = await Backup.findOne({
    where: { id },
    include: [
      {
        model: Users
      },
      {
        model: Projects
      }
    ]
  });
  return res;
};

const create = async (data,userId) => {
  const newBackup = await Backup.create({
    id: uuid.v4(),
    software:data.software,
    version:data.version||"",
    name:data.name,
    backup:data.backup,
    userId:userId,
    projectId:data.projectId,
    date:data.date
  })
  return newBackup;
};

const edit = async (id, data, userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Backup.update(
      {...data},
      { where: { id: id } }
    )
  } else {
    res = await Backup.update(
      {...data},
      { where: { id: id }, }
    )
  }
  return res
};

const remove = async (id) => {
  const backupDeleted = await Backup.destroy({
    where: {
      id: id,
    },
  });
  return backupDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove
}