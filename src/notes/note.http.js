const noteControllers = require("./note.controllers");

const getAll = (req, res) => {
  noteControllers
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, notes: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  noteControllers
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `note with id ${id} not exist` });
    });
}
const getByUserId = (req, res) => {
  const id = req.user.id;
  noteControllers
    .getByUserId(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `note with userId ${id} not exist` });
    });
}

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data"});
  } else if (
    !data.note
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        note:"text",
        userId:"UUID"
      },
    });
  } else {
    noteControllers.create(data, req.user.id)
      .then((response) => {
        res.status(201).json({
          message: `note created succesfully with id: ${response.id}`,
          note: response,
        });
      })
      .catch(err => {
        res.status(400).json({message: err.errors[0].message})
      }) 
  }
};

const remove = (req, res) => {
  const id = req.params.id;
  noteControllers.remove(id)
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
    noteControllers.edit(id, data, req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'note edited succesfully',
          note: response
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
