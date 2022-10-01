const inventoryController = require("./inventories.controllers");

const getAll = (req, res) => {
  inventoryController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, inventory: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getById = (req, res) => {
  const id = req.params.id;
  inventoryController
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `inventory with id ${id} not exist` });
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
        "name":"TEXT"
      },
    });
  } else {
    inventoryController.create(data)
      .then((response) => {
        res.status(201).json({
          message: `inventory created succesfully with id: ${response.id}`,
          inventory: response,
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
    inventoryController.edit(id,data,req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'inventory edited succesfully',
          inventory: response
        })
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
      })
  }
}

const remove = (req, res) => {
  const id = req.params.id;
  inventoryController.remove(id)
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
