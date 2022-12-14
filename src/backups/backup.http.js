const backupControllers = require("./backup.controllers");

const getAll = (req, res) => {
  backupControllers
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, backups: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  backupControllers
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `backup with id ${id} not exist` });
    });
}
const getByProjectId = (req, res) => {
  const id = req.params.id;
  backupControllers
    .getByProjectId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `backup with id ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.software ||
    !data.version ||
    !data.name ||
    !data.projectId
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        software: "text",
        version: "text",
        name: "text",
        backup: "url",
        userId: "UUID",
        projectId: "UUID"
      },
    });
  } else {
    backupControllers.create(data, req.user.id)
    console.log(data,'backupsss')
      .then((response) => {
        res.status(201).json({
          message: `backup created succesfully with id: ${response.id}`,
          backup: response,
        });
      })
      .catch(err => {
        res.status(400).json({ message: err.errors[0].message })
      })
  }
};
const upload = (req, res) => {
  const backupId = req.params.id;
  console.log(backupId,'backupid')
  //const backupPath = req.hostname + ':8000' + '/api/v1/uploads/' + req.file.filename
  const backupPath = req.hostname + ':8000' + '/api/v1/uploads/' + req.file.filename
  backupControllers.upload(backupId, backupPath)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json({ message: err.errors[0].message })
    })
};

const remove = (req, res) => {
  const id = req.params.id;
  backupControllers.remove(id)
    .then((response) => {
      if (response) {
        res.status(204).json({ message: response })
      } else {
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
    backupControllers.edit(id, data, req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'backup edited succesfully',
          backup: response
        })
      })
      .catch((err) => {
        res.status(400).json({ message: err.errors[0].message })
      })
  }
};

module.exports = {
  getAll,
  create,
  getById,
  getByProjectId,
  remove,
  edit,
  upload
};
