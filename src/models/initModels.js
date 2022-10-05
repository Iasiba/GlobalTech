const Users = require('./user.model')
const Roles = require('./roles.model')
const Projects = require('./projects.model')
const Tasks = require('./tasks.model')
const TaskImages = require('./tasksImages.models')
const Rooms = require('./rooms.model')
const Activities = require('./activities.model')
const Materials = require('./materials.model')
const Users_images = require('./users.images')
//const Contacts = require('./contacts.model')
//const Creators = require('./creators.model')
const Inventory = require('./inventories.model')
const Accounts = require('./accounts.model')

//const Reservations = require('./reservations.model')
//const Acomodations = require('./acomodations.model')
//const Acomodation_images = require('./acomodations.images.models')
//const Places = require('./places.model')

const initModels = () => {
    //? Users <- Roles 
    
    Users.belongsTo(Roles);
    //-Roles.hasOne(Users);
    Roles.hasMany(Users);
    //Roles.hasMany(Users, { foreignKey: { name: "role_id", allowNull: false }});
 
    //? Users -> Users_images
    Users_images.belongsTo(Users)
    Users.hasMany(Users_images)

    TaskImages.belongsTo(Tasks)
    Tasks.hasMany(TaskImages)

    Tasks.belongsTo(Users)
    Users.hasMany(Tasks)

    Rooms.belongsTo(Projects)
    Projects.hasMany(Rooms)

    Tasks.belongsTo(Rooms)
    Rooms.hasMany(Tasks)

    Projects.belongsTo(Users)
    Users.hasMany(Projects)

    Users.belongsTo(Projects) //esta relacion es que un proyecto tiene muchos contactos
    Projects.hasMany(Users)
/* 
    Contacts.belongsTo(Projects)
    Projects.hasMany(Contacts)
*/

    Users.belongsTo(Tasks)
    Tasks.hasMany(Users)
/**
    Tasks.belongsTo(Creators)
    Creators.hasMany(Tasks)

    Creators.belongsTo(Users)
    Users.hasMany(Creators)
 */
    Activities.belongsTo(Tasks)
    Tasks.hasMany(Activities)

// 
    Materials.belongsTo(Users)
    Users.hasMany(Materials)
    
    Materials.belongsTo(Projects)
    Projects.hasMany(Materials)

    Materials.belongsTo(Inventory)
    Inventory.hasMany(Materials)

    Accounts.belongsTo(Projects)
    Projects.hasMany(Accounts)


/*
    Users.belongsTo(Reservations);/// estas relaciones estan mal pero asi me funciona todas las funciones 
    Reservations.hasMany(Users);  /// reseervacion edit admin y host si funcionan
    Acomodations.belongsTo(Reservations);// como invitado no jala
    Reservations.hasMany(Acomodations);



    Reservations.belongsTo(Users);  // estas relaciones estan bien pero nno me funcionan las relaciones anteriores
    Users.hasMany(Reservations);    // solo funcionan como admin y no como invitado o host
    Reservations.belongsTo(Acomodations);
    Acomodations.hasMany(Reservations);
    //? Users <-> Accomodations
    Users.belongsToMany(Acomodations, { through: Reservations });
    Acomodations.belongsToMany(Users, { through: Reservations });
    //
    


    //? Accomodations -> Acommodation_images
    Acomodation_images.belongsTo(Acomodations);
    Acomodations.hasMany(Acomodation_images);

    //? 
    Acomodations.belongsTo(Places);
    Places.hasMany(Acomodations);

    //? User -> Acommodations (Host)
    Users.hasMany(Acomodations)
    Acomodations.belongsTo(Users)
*/
}
module.exports = initModels