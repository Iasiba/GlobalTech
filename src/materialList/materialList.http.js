const materialListControllers = require("./materialList.controllers");

const getAll = (req, res) => {
  materialListControllers
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, materialList: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  materialListControllers
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `material list with id ${id} not exist` });
    });
}
const getByUserId = (req, res) => {
  const id = req.user.id;
  materialListControllers
    .getByUserId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `material list with userId ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.userId||!data.materialId
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        userId:"UUID",
        materialId:"UUID"
      },
    });
  } else {
    materialListControllers.create(data, req.user.id)
      .then((response) => {
        res.status(201).json({
          message: `material list created succesfully with id: ${response.id}`,
          MaterialList: response,
        });
      })
      .catch(err => {
        res.status(400).json({message: err.errors[0].message})
      }) 
  }
};

const remove = (req, res) => {
  const id = req.params.id;
  materialListControllers.remove(id)
    .then((response) => {
      if(response){
        res.status(204).json({message:response})
      }else{
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
    materialListControllers.edit(id, data, req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'material list edited succesfully',
          MaterialList: response
        })
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
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
