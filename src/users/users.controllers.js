const uuid = require("uuid");
const { hashPassword } = require("../utils/crypt");

const Users = require("../models/users.model");
const Roles = require("../models/roles.model");
const Projects = require("../models/projects.model");
const Tasks = require("../models/tasks.model")
const TaskList = require("../models/task.list.model")

const getAllUsers = async () => {
  const res = await Users.findAll({
    include: [
      {
        model: Roles
      },
      {
        model: Projects,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: Tasks
      },
      {
        model: TaskList
      }
    ],
    attributes: {
      exclude: ["password", "createdAt", "UpdatedAt", "roleId"]
    }
  })
  //? select * from users;
  return res
}

const getUserById = async (id) => {
  const res = await Users.findOne({
    where: { id },
    include: [
      {
        model: Roles
      },
      {
        model: Projects,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: Tasks
      },
      {
        model: TaskList
      }
    ],
    attributes: {
      exclude: ["password", "createdAt", "updatedAt", "roleId"],
    },
  });
  return res;
  //? select * from users where id = ${id};
}

const createUser = async (data) => {
  console.log(data, "entro a crear users")
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.first_name,
    email: data.email,
    password: hashPassword(data.password),
    roleId: data.roleId,
    lastName: data.last_name || '',
    gender: data.gender || '',
    phone: data.phone || '',
    birthdayDate: data.birthday_date || "2000/01/01",
    dni: data.dni || '',
    address: data.address || '',
    profileImage: data.profile_image || 'https://www.youtube.com/watch?v=hnCZmEOUvcY',
    status: "active",
    verified: false,
    watchActivities: data.watchActivities,
    watchDocumentation: data.watchDocumentation,
    watchHome: data.watchHome,
    watchMyHome: data.watchMyHome,
    watchProjects: data.watchProjects,
    watchTasks: data.watchTasks,
    watchUsers: data.watchUsers,
    createOrEditActivities: data.createOrEditActivities,
    createOrEditArea: data.createOrEditArea,
    createOrEditAccount: data.createOrEditAccount,
    createOrEditGuide: data.createOrEditGuide,
    createOrEditInventary: data.createOrEditInventary,
    createOrEditMaterial: data.createOrEditMaterial,
    createOrEditNote: data.createOrEditNote,
    createOrEditProject: data.createOrEditProject,
    createOrEditBackup: data.createOrEditBackup,
    createOrEditTask: data.createOrEditTask,
    createOrEditUser: data.createOrEditUser
  });
  // const newUserWithSpreadOperator =  await Users.create({
  //   ...data,
  //   id: uuid.v4(),
  //   password: hashPassword(data.password),
  //   role: "normal",
  //   is_active: true,
  //   verified: false,
  // })
  return newUser;
}

const editUser = async (userId, data, userRol) => {
  let res = null
  console.log(data,'editar usuarios')
  const { id, password, verified, roleId, ...restOfProperties } = data;
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Users.update(
      { ...restOfProperties, roleId },
      { where: { id: userId } }
    )
  } else {
    res = await Users.update(
      restOfProperties,
      { where: { id: userId }, }
    )
  }
  return res
}

const deleteUser = async (id) => {
  console.log("eliminar a ", id)
  const UserDeleted = await Users.destroy({
    where: {
      id: id,
    },
  });
  return UserDeleted;
}

const getUserByEmail = async (email) => {
  const user = await Users.findOne({
    where: { email },
    attributes: {
      exclude: ["createdAt", "updatedAt", "roleId"],
    },
  });
  return user;
  //? select * from users where email = ${email};
}

const editProfileImg = async (userID, imgUrl) => {
  const data = await Users.update(
    {
      profileImage: imgUrl,
    },
    {
      where: { id: userID },
    }
  );
  return data;
}

const getUserWithRole = async (userId) => {
  const data = await Users.findOne({
    where: {
      id: userId,
    },
    include: {
      model: Roles,
      as: "role",
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["roleId", "createdAt", "updatedAt", "password"],
    },
  });
  return data;
}
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserByEmail,
  editProfileImg,
  getUserWithRole
}
