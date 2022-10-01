const accountsController = require("./accounts.controllers");

const getAll = (req, res) => {
  accountsController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, accounts: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getById = (req, res) => {
  const id = req.params.id;
  accountsController
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `accounts with id ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  const projectId=req.params.projectId
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.owner||
    !data.user||
    !data.password||
    !data.software
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        "owner":"text",
        "user":"text",
        "password":"text",
        "software":"text"
      },
    });
  } else {
    accountsController.create(data,projectId)
      .then((response) => {
        res.status(201).json({
          message: `account created succesfully with id: ${response.id}`,
          account: response,
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
    accountsController.edit(id,data,req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'account edited succesfully',
          material: response
        })
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
      })
  }
}

const remove = (req, res) => {
  const id = req.params.id;
  accountsController.remove(id)
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
