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

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.userId||
    !data.description||
    !data.roomId||
    !data.executionDate
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        "userId":"userId",
        "description":"description",
        "roomId":"roomId",
        "executionDate":"executionDate"
      },
    });
  } else {
    taskController.create(data,req.user.id)
      .then((response) => {
        res.status(201).json({
          message: `task created succesfully with id: ${response.id}`,
          task: response,
        });
      })
      .catch(err => {
        res.status(400).json({message: err.errors[0].message})
      }) 
  }
}

const edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else {
    taskController.edit(id, {...data,...{userId:req.user.id}})
      .then((response) => {
        res.status(200).json({
          message: 'task edited succesfully',
          task: response
        })
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
      })
  }
}

const remove = (req, res) => {
  const id = req.params.id;
  taskController.remove(id)
    .then((response) => {
      if(response){
        res.status(204).json({message:response})
      }else{
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
  remove,
  edit
}
