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

const getByUserId = (req, res) => {
  const id = req.user.id;
  activitiesController
    .getByUserId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `activities with userId ${id} not exist` });
    });
}

const getByTaskId = (req, res) => {
  const id = req.params.id;
  activitiesController
    .getByTaskId(id)
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
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.description
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        "description": "TEXT"
      },
    });
  } else {
    activitiesController.create(data, taskId, req.user.id)
      .then((response) => {
        res.status(201).json({
          message: `activity created succesfully with id: ${response.id}`,
          activity: response,
        });
      })
      .catch(err => {
        res.status(400).json({ message: err.errors[0].message })
      })
  }
}

const edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else {
    activitiesController.edit(id, data, req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'activity edited succesfully',
          activity: response
        })
      })
      .catch((err) => {
        res.status(400).json({ message: err.errors[0].message })
      })
  }
}

const remove = (req, res) => {
  const id = req.params.id;
  activitiesController.remove(id)
    .then((response) => {
      if (response) {
        res.status(204).json({ message: response })
      } else {
        res.status(400).json({
          message: 'Invalid ID'
        })
      }
    })
}
const removeByTaskId = (req, res) => {
  const id = req.params.id
  activitiesController.removeByTaskId(id)
    .then((response) => {
      if (response) {
        res.status(204).json({ message: response })
      } else {
        res.status(400).json({
          message: 'Invalid ID'
        })
      }
    })
}
const upload = (req, res) => {
  const activityId = req.params.id;
  //console.log(backupId, 'backupid')
  //const backupPath = req.hostname + ':8000' + '/api/v1/uploads/' + req.file.filename
  const currentDate = new Date();
  // Obtener la fecha y hora en formatos deseados
  const fechaActual = currentDate.toLocaleDateString(); // Fecha en formato local
  const horaActual = currentDate.toLocaleTimeString(); // Hora en formato local
  const fechaISO = currentDate.toISOString(); // Fecha y hora en formato ISO

  const signaturePath = 'http://' + req.hostname + ':8000' + /*'/api/v1/uploads/'*/'/public/chapters/' + req.file.filename
  activitiesController.upload(activityId, signaturePath, req.body.receiver)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json({ message: err.errors[0].message })
    })
};
module.exports = {
  getAll,
  create,
  getById,
  getByTaskId,
  getByUserId,
  remove,
  edit,
  removeByTaskId,
  upload
}
