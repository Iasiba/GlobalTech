const uuid = require("uuid");

const Programming = require("../models/programming.models");
const Users = require("../models/users.model")

const getAll = async () => {
  const res = await Programming.findAll({
    include: [
      {
        model: Users
      }
    ],
  })
  return res
};

const getById = async (id) => {
  const res = await Programming.findOne({
    where: { id }
  });
  return res;
};

const create = async (data,userId) => {
  const newProgrammingGuide = await Programming.create({
    id: uuid.v4(),
    name:data.name,
    datasheet:data.datasheet,
    guide:data.guide,
    tutorial:data.tutorial,
    userId:userId
  })
  return newProgrammingGuide;
};

const edit = async (id, data, userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Programming.update(
      {...data},
      { where: { id: id } }
    )
  } else {
    res = await Programming.update(
      {...data},
      { where: { id: id }, }
    )
  }
  return res
};

const remove = async (id) => {
  const programminGuideDeleted = await Programming.destroy({
    where: {
      id: id,
    },
  });
  return programminGuideDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove
}