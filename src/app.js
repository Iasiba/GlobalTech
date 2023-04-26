//* Dependencias
const cors = require('cors')
const express = require("express")
const passport = require("passport")
require("./middleware/auth.middleware")(passport)
const path = require('path')
//*Archivos de rutas
const authRouter = require("./auth/auth.router").router
const rolesRouter = require("./Roles/roles.router").router
const userRouter = require("./users/users.router").router
const userImageRouter = require("./userImages/userImages.router").router
const roomRouter = require('./rooms/rooms.router').router
const taskRouter = require("./tasks/tasks.router").router
const projectRouter = require("./projects/projects.router").router
const taskImagesRouter = require("./taskImages/taskImages.router").router
const materialRouter = require("./materials/materials.router").router
const inventoryRouter = require("./inventories/inventories.router").router
const accountsRouter = require("./accounts/accounts.router").router
const activitiesRouter = require("./activities/activities.router").router
const programmingRouter = require("./programming/programming.router").router
const noteRouter = require("./notes/note.router").router
const backupRouter = require("./backups/backup.router").router
const materialListRouter = require('./materialList/materialList.router').router
const taskListRouter = require('./taskList/taskList.router').router
const defaultData = require("./utils/defaultData")

const initModels = require('./models/initModels')
//* Configuraciones iniciales

const { db } = require('./utils/database')

//* Configuraciones iniciales
const app = express();
const PORT = process.env.PORT || 8000;
initModels()

db.authenticate()
  .then(() => console.log('Database Authenticated'))
  .catch(err => console.log(err))

if (process.env.NODE_ENV === 'production') {
  db.sync()
    .then(() => {
      console.log('Database synced')
      defaultData()
    })
    .catch(err => console.log(err))
} else {
  db.sync({ force: true })
    .then(() => {
      console.log('Database synced')
      defaultData()
    })
    .catch(err => console.log(err))
}
/*
db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err))
*/
//? Esta configuracion es para habilitar el req.body
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({ message: "All ok!" });
});

app.use(cors())//acceso a todo el mundo
app.use('/public', express.static(`C:/Users/carlo/Documents/backend/GlobalTech/media`));
//`C:/Users/carlo/Documents/backend/GlobalTech/media`

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/roles", rolesRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/userImages", userImageRouter)
app.use("/api/v1/accounts", accountsRouter)
app.use("/api/v1/projects", projectRouter)
app.use("/api/v1/inventories", inventoryRouter)
app.use("/api/v1/rooms", roomRouter)
app.use("/api/v1/tasks", taskRouter)
app.use("/api/v1/activities", activitiesRouter)
app.use("/api/v1/materials", materialRouter)
app.use("/api/v1/programmings", programmingRouter)
app.use("/api/v1/notes", noteRouter)
app.use("/api/v1/backups", backupRouter)
app.use("/api/v1/materialList", materialListRouter)
app.use("/api/v1/taskList", taskListRouter)

app.use("/api/v1/taskImages", taskImagesRouter)

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

exports.default = app
exports.app = app
module.exports = app