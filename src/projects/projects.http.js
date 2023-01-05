const projectController = require("./projects.controllers");

const getAll = (req, res) => {
  projectController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, projects: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getById = (req, res) => {
  const id = req.params.id;
  projectController
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `project with id ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.name||
    !data.address||
    !data.coordinates
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        "name":"TEXT",
        "address":"TEXT",
        "coordinates":"TEXT"
      },
    });
  } else {
    projectController.create(data,req.user.id)
      .then((response) => {
        res.status(201).json({
          message: `project created succesfully with id: ${response.id}`,
          project: response,
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
    projectController.edit(id,data,req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'project edited succesfully',
          project: response
        })
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
      })
  }
}

const remove = (req, res) => {
  const id = req.params.id;
  projectController.remove(id)
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
