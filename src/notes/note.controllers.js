const uuid = require("uuid");

const Note = require("../models/notes.models");
const Users = require("../models/users.model")

const getAll = async () => {
  const res = await Note.findAll({
    include: [
      {
        model: Users
      }
    ],
  })
  return res
};

const getById = async (id) => {
  const res = await Note.findOne({
    where: { id }
  });
  return res;
};

const getByUserId = async (userId) => {
  const res = await Note.findAll({
    where: { userId },
    include: [
      {
        model: Users
      }
    ]
  });
  return res;
};

const create = async (data,userId) => {
  const newNote = await Note.create({
    id: uuid.v4(),
    note:data.note,
    userId:userId,
    tittle:data.tittle
  })
  return newNote;
};

const edit = async (id, data, userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Note.update(
      {...data},
      { where: { id: id } }
    )
  } else {
    res = await Note.update(
      {...data},
      { where: { id: id }, }
    )
  }
  return res
};

const remove = async (id) => {
  const noteDeleted = await Note.destroy({
    where: {
      id: id,
    },
  });
  return noteDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  getByUserId,
  edit,
  remove
}