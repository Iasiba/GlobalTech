const materialController = require("./materials.controllers");

const getAll = (req, res) => {
  materialController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, materials: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getPendings= (req, res) => {
  materialController
    .getPendigs()
    .then((response) => {
      res.status(200).json({ items: response.length, materials: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getById = (req, res) => {
  const id = req.params.id;
  materialController
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `material with id ${id} not exist` });
    });
}
const getByUserId = (req, res) => {
  const id = req.user.id;
  materialController
    .getByUserId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `material with userId ${id} not exist` });
    });
}
const getByInventoryId = (req, res) => {
  const id = req.params.id;
  materialController
    .getByInventoryId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `material with inventoryId ${id} not exist` });
    });
}

const getByProjectId = (req, res) => {
  const id = req.params.id;
  materialController
    .getByProjectId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `material with projectId ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.name||
    !data.amount
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        "name":"TEXT",
        "amount":"TEXT"
      },
    });
  } else {
    materialController.create(data,req.params.id,req.user.id)
      .then((response) => {
        res.status(201).json({
          message: `material created succesfully with id: ${response.id}`,
          material: response,
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
    materialController.edit(id,data,req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'material edited succesfully',
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
  materialController.remove(id)
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
  getPendings,
  getByInventoryId,
  getByProjectId,
  getByUserId,
  remove,
  edit
}
