const taskListControllers = require("./taskList.controllers");

const getAll = (req, res) => {
  taskListControllers
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, taskList: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  taskListControllers
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `task list with id ${id} not exist` });
    });
}
const getByUserId = (req, res) => {
  const id = req.user.id;
  taskListControllers
    .getByUserId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `task list with userId ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.userId || !data.taskId
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        userId: "UUID",
        taskId: "UUID"
      },
    });
  } else {
    taskListControllers.create(data, req.user.id)
      .then((response) => {
        res.status(201).json({
          message: `task list created succesfully with id: ${response.id}`,
          taskList: response,
        });
      })
      .catch(err => {
        res.status(400).json({ message: err.errors[0].message })
      })
  }
};

const remove = (req, res) => {
  const id = req.params.id;
  taskListControllers.remove(id)
    .then((response) => {
      if (response) {
        res.status(204).json({ message: response })
      } else {
        res.status(400).json({
          message: 'Invalid ID'
        })
      }
    })
};

const edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else {
    taskListControllers.edit(id, data, req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'task list edited succesfully',
          taskList: response
        })
      })
      .catch((err) => {
        res.status(400).json({ message: err.errors[0].message })
      })
  }
};

module.exports = {
  getAll,
  create,
  getById,
  getByUserId,
  remove,
  edit
};
