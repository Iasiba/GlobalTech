const taskImagesControllers = require("./taskImages.controllers");

const getAll = (req, res) => {
  taskImagesControllers
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, taskImages: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getById = (req, res) => {
  const id = req.params.id;
  taskImagesControllers
    .getById(id,req.user.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `taskImage with id ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.url||
    !data.taskId||
    !data.name
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        url: "url",
        taskId: "UUID",
        name:"TEXT"
      },
    });
  } else {
    taskImagesControllers.create(data)
      .then((response) => {
        res.status(201).json({
          message: `taskImage created succesfully with id: ${response.id}`,
          user: response,
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
    taskImagesControllers.edit(id, data,req.user.rol, req.user.rol)
    .then((response) => {
      res.status(200).json({
        message: 'taskImage edited succesfully',
        taskImage: response
      })
    })
    .catch((err) => {
      res.status(400).json({message: err.errors[0].message})
    })
  }
  
}

const remove = (req, res) => {
  const id = req.params.id;
  taskImagesControllers.remove(id)
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
};
