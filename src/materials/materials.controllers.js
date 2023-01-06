const uuid = require("uuid");

const Materials = require("../models/materials.model");
const Users = require("../models/users.model")
const Inventories = require("../models/inventories.model");
const Projects = require("../models/projects.model")

const getAll = async () => {
  const res = await Materials.findAll({
    include: [
      {
        model: Users
      },
      {
        model: Projects
      },
      {
        model: Inventories
      }
    ],
  })
  return res
}
const getPendigs = async () => {
  const res = await Materials.findAll({
    where: { onHold: true },
    include: [
      {
        model: Users
      },
      {
        model: Projects
      },
      {
        model: Inventories
      }
    ],
  })
  return res
}
const getById = async (id) => {
  const res = await Materials.findOne({
    where: { id },
    include: [
      {
        model: Users
      },
      {
        model: Projects
      },
      {
        model: Inventories
      }
    ],
  });
  return res;
}
const getByUserId = async (userId) => {
  const res = await Materials.findAll({
    where: { userId },
    include: [
      {
        model: Users
      },
      {
        model: Projects
      },
      {
        model: Inventories
      }
    ]
  });
  return res;
}

const getByInventoryId = async (inventoryId) => {
  const res = await Materials.findAll({
    where: { inventoryId },
    include: [
      {
        model: Users
      }/*,
      {
        model: Projects
      },
      {
        model: Inventories
      }*/
    ]
  });
  return res;
}
const getByProjectId = async (projectId) => {
  const res = await Materials.findAll({
    where: { projectId },
    include: [
      {
        model: Users
      }/*,
      {
        model: Projects
      },
      {
        model: Inventories
      }*/
    ]
  });
  return res;
}

const create = async (data, inventoryId, userId) => {
  console.log(data,inventoryId)
  const newMaterial = await Materials.create({
    id: uuid.v4(),
    onHold: data.onHold || false,
    installed: data.installed || false,
    returned: data.returned || false,
    damaged: data.damaged || false,
    delivered: data.delivered || false,
    name: data.name,
    model:data.model,
    amount: data.amount,
    userId: userId,
    inventoryId: inventoryId,
    projectId: data.projectId
  })
  return newMaterial;
}

const edit = async (materialId, data, userRol) => {
  let res = null
  const { userId, projectId, ...restofproperties } = data
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Materials.update(
      { userId, projectId, ...data },
      { where: { id: materialId } }
    )
  }
  if ("b9d456a0-7ace-4493-9e61-9f3efa7090e8" === userRol || "fef3a08d-2cec-4728-9745-7cbd2b37e557" === userRol) {//tecnico
    res = await Materials.update(
      { userId, ...restofproperties },
      { where: { id: materialId } }
    )
  }
  return res
}

const remove = async (id) => {
  const materialDeleted = await Materials.destroy({
    where: {
      id: id,
    },
  });
  return materialDeleted;
}

module.exports = {
  getAll,
  create,
  getById,
  getPendigs,
  getByInventoryId,
  getByUserId,
  getByProjectId,
  edit,
  remove
}