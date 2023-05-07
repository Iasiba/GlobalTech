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

const create = async (data, userId) => {
  console.log('llego hasta aqui', data.datasheet, data.guide, data.tutorial)
  const newProgrammingGuide = await Programming.create({
    id: uuid.v4(),
    name: data.name,
    datasheet: data.datasheet || 'https://www.youtube.com/',
    guide: data.guide || 'https://www.youtube.com/',
    tutorial: data.tutorial || 'https://www.youtube.com/',
    userId: userId
  })
  return newProgrammingGuide;
};

const edit = async (id, data, userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Programming.update(
      { ...data },
      { where: { id: id } }
    )
  } else {
    res = await Programming.update(
      { ...data },
      { where: { id: id }, }
    )
  }
  return res
};
const uploadGuide = async (programmingId, guidePath) => {
  console.log(guidePath, "llego a guia")
  const data = await Programming.update(
    {
      guide: guidePath,
    },
    {
      where: { id: programmingId },
    }
  );
  return data;
}
const uploadDatasheet = async (programmingId, datasheetPath) => {
  console.log(datasheetPath, "llego a datasheet")
  const data = await Programming.update(
    {
      datasheet: datasheetPath,
    },
    {
      where: { id: programmingId },
    }
  );
  return data;
}
const uploadTutorial = async (programmingId, tutorialPath) => {
  console.log(tutorialPath, "llego a tutorial")
  const data = await Programming.update(
    {
      tutorial: tutorialPath,
    },
    {
      where: { id: programmingId },
    }
  );
  return data;
}

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
  uploadGuide,
  uploadDatasheet,
  uploadTutorial,
  getById,
  edit,
  remove
}