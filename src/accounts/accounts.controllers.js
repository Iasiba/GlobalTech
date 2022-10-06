const uuid = require("uuid");

const Accounts = require("../models/accounts.model")
const Project = require("../models/projects.model");

const getAll = async () => {
  const res = await Accounts.findAll({
    include: [
      {
        model: Project
      }
    ],
  })
  return res
}

const getById = async (id) => {
  const res = await Accounts.findOne({
    where: { id },
    include: [
      {
        model: Project
      }
    ],
  });
  return res;
}

const getByProjectId = async (projectId) => {
  const res = await Accounts.findAll({
    where: { projectId },
    include: [
      {
        model: Project
      }
    ],
  });
  return res;
}

const create = async (data, projectId,creatorId) => {
  const newAccount = await Accounts.create({
    id: uuid.v4(),
    userId:creatorId,
    owner: data.owner,
    user: data.user,
    password: data.password,
    projectId: projectId,
    directionIp: data.directionIp,
    software: data.software
  })
  return newAccount;
}

const edit = async (accountId, data,userId, userRol) => {
  let res = null
  const { id, owner,creatorId, ...restofproperties } = data
  if ("97006fe0-4a35-47f4-bfbf-fc962e5fe500" === userRol) {    //propietario falta completar propietario LOGUEO Router account
    let account= await Accounts.findOne({ where: {id:accountId }})
    if(account.userId===userId){
      res = await Accounts.update(
        { ...restofproperties },
        { where: { id: accountId } }
      )
    }
  }
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol ||     //admin
      "b9d456a0-7ace-4493-9e61-9f3efa7090e8" === userRol ) {    //programmer
    res = await Accounts.update(
      { ...restofproperties },
      { where: { id: accountId } }
    )
  }
  return res
}

const remove = async (id) => {
  const accountDeleted = await Accounts.destroy({
    where: {
      id: id,
    },
  });
  return accountDeleted;
}

module.exports = {
  getAll,
  getById,
  getByProjectId,
  create,
  edit,
  remove
}