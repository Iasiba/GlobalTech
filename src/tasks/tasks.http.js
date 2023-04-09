const taskController = require("./tasks.controllers");
const getAll = (req, res) => {
  taskController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, tasks: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getById = (req, res) => {
  const id = req.params.id;
  taskController
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `task with id ${id} not exist` });
    });
}

const getByUser = (req, res) => {
  const userId = req.user.id;
  taskController
    .getByUser(userId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `task with userId ${userId} not exist` });
    });
}

const getByRoomId = (req, res) => {
  const roomId = req.params.roomId
  taskController
    .getByRoomId(roomId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `task with userId ${roomId} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.description ||
    !data.executionDate ||
    !data.roomId
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        "description": "description",
        "executionDate": "executionDate",
        "roomId": "roomId"
      },
    });
  } else {
    taskController.create(data, req.user.id, req.params.roomId)
      .then((response) => {
        res.status(201).json({
          message: `task created succesfully with id: ${response.id}`,
          task: response,
        });
      })
      .catch(err => {
        res.status(400).json({ message: err.errors[0].message })
      })
  }
}

const edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else {
    taskController.edit(id, data, req.user.id, req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'task edited succesfully',
          task: response
        })
      })
      .catch((err) => {
        res.status(400).json({ message: err.errors[0].message })
      })
  }
}

const remove = (req, res) => {
  const id = req.params.id;
  taskController.remove(id)
    .then((response) => {
      if (response) {
        res.status(204).json({ message: response })
      } else {
        res.status(400).json({
          message: 'Invalid ID'
        })
      }
    })
}
const removeByRoomId = (req, res) => {
  const id = req.params.id
  taskController.removeByRoomId(id)
    .then((response) => {
      if (response) {
        res.status(204).json({ message: response })
      } else {
        res.status(400).json({
          message: 'Invalid ID'
        })
      }
    })
}

module.exports = {
  getAll,
  create,
  getById,
  getByUser,
  getByRoomId,
  edit,
  remove,
  removeByRoomId
}
