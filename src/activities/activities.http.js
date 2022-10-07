const activitiesController = require("./activities.controllers");

const getAll = (req, res) => {
  activitiesController
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, activities: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

const getById = (req, res) => {
  const id = req.params.id;
  activitiesController
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `activity with id ${id} not exist` });
    });
}

const getByTaskId = (req, res) => {
  const id = req.params.id;
  activitiesController
    .getByActivityId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `activity with activityId ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  const taskId = req.params.id
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
    activitiesController.create(data,taskId)
      .then((response) => {
        res.status(201).json({
          message: `activity created succesfully with id: ${response.id}`,
          activity: response,
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
    activitiesController.edit(id,data,req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'activity edited succesfully',
          activity: response
        })
      })
      .catch((err) => {
        res.status(400).json({message: err.errors[0].message})
      })
  }
}

const remove = (req, res) => {
  const id = req.params.id;
  activitiesController.remove(id)
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
  getByTaskId,
  remove,
  edit
}
