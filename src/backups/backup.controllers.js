const fs = require('fs');

const uuid = require("uuid");

const Backup = require("../models/backups.models");
const Projects = require("../models/projects.model");
const Users = require("../models/users.model")

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
}

const getByProjectId = async (projectId) => {
  const res = await Backup.findAll({
    where: { projectId },
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

const create = async (data, userId) => {
  console.log(data, 'datosss', userId)
  const newBackup = await Backup.create({
    id: uuid.v4(),
    software: data.software,
    version: data.version || "",
    name: data.name,
    backup: data.backup || "https://www.youtube.com/watch?v=DIexYmyB1zk",//https://www.youtube.com/watch?v=DIexYmyB1zk
    userId: userId,
    projectId: data.projectId,
    date: data.date
  })
  return newBackup;
};

const edit = async (id, data, userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Backup.update(
      { ...data },
      { where: { id: id } }
    )
  } else {
    res = await Backup.update(
      { ...data },
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

const upload = async (backupId, backupPath) => {
  const data = await Backup.update(
    {
      backup: backupPath,
    },
    {
      where: { id: backupId },
    }
  );
  return data;
}

const files = async () => {
  fs.readFile('./io.jpg',function(err,content){
    //console.log(content)
    return content
  })
  /*await fs.readdir('./', function (err, archivos) {
    if (err) {
      //onError(err);
      return err
    }
    console.log(archivos);
    const aux = archivos.slice(0)
    return aux
  });*/

}
module.exports = {
  getAll,
  create,
  getById,
  getByProjectId,
  edit,
  remove,
  upload,
  files
}