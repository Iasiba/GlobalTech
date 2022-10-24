const programmingControllers = require("./programming.controllers");

const getAll = (req, res) => {
  programmingControllers
    .getAll()
    .then((response) => {
      res.status(200).json({ items: response.length, programmingGuide: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  programmingControllers
    .getById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `programming guide with id ${id} not exist` });
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
        name:"text",
        datasheet:"url",
        guide:"url",
        tutorial:"url",
        userId:"UUID"
      },
    });
  } else {
    programmingControllers.create(data, req.user.id)
      .then((response) => {
        res.status(201).json({
          message: `Programming guide created succesfully with id: ${response.id}`,
          programmingGuide: response,
        });
      })
      .catch(err => {
        res.status(400).json({message: err.errors[0].message})
      }) 
  }
};

const remove = (req, res) => {
  const id = req.params.id;
  programmingControllers.remove(id)
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
    programmingControllers.edit(id, data, req.user.rol)
      .then((response) => {
        res.status(200).json({
          message: 'Programming guide edited succesfully',
          programmingGuide: response
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
  remove,
  edit
};
