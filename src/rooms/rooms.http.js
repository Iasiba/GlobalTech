const roomController = require("./rooms.controllers");

const getAll = (req, res) => {
  roomController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, rooms: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getById = (req, res) => {
  const id = req.params.id;
  roomController
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `room with id ${id} not exist` });
    });
}
const getByProjectId = (req, res) => {
  const id = req.params.id;
  roomController
    .getByProjectId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `room with id ${id} not exist` });
    });
}
const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.name
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        name: "TEXT"
      },
    });
  } else {
    roomController.create(data,req.params.id)
      .then((response) => {
        res.status(201).json({
          message: `room created succesfully with id: ${response.id}`,
          room: response,
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
    console.log(id,data)
    roomController.edit(id, data)
      .then((response) => {
        res.status(200).json({
          message: 'room edited succesfully',
          room: response
        })
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
      })
  }
}

const remove = (req, res) => {
  const id = req.params.id;
  roomController.remove(id)
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
  getByProjectId,
  remove,
  edit
}
