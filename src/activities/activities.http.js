const pendingsController = require("./activities.controllers");

const getAll = (req, res) => {
  pendingsController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, pendings: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getById = (req, res) => {
  const id = req.params.id;
  pendingsController
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `pendings with id ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  const taskId = req.params.taskId
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.description
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        "description":"TEXT"
      },
    });
  } else {
    pendingsController.create(data,taskId)
      .then((response) => {
        res.status(201).json({
          message: `pendings created succesfully with id: ${response.id}`,
          pendings: response,
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
    pendingsController.edit(id,data,req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'pendings edited succesfully',
          pendings: response
        })
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
      })
  }
}

const remove = (req, res) => {
  const id = req.params.id;
  pendingsController.remove(id)
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
  remove,
  edit
}
