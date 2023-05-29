/*
const Accommodation_images = require("../models/acomodations.images.models");
const Accommodations = require("../models/acomodations.model");
const Places = require("../models/places.model");
const Reservations = require("../models/reservations.model");
*/
const Users = require("../models/users.model")
const UsersImages = require("../models/users.images")
const Roles = require("../models/roles.model")
const Projects = require("../models/projects.model")
const Accounts = require("../models/accounts.model")
const Inventories = require("../models/inventories.model")
const Rooms = require("../models/rooms.model")
const Tasks = require("../models/tasks.model")
const Activities = require("../models/activities.model")
const Material = require("../models/materials.model")
const Programming = require("../models/programming.models")
const Note = require("../models/notes.models")
const Backup = require("../models/backups.models")

/*
const uuid = require('uuid');
const acomodation_images = require("../models/acomodations.images.models");
*/

const generateData = async () => {

  // await Accommodations.sync({force: true})
  // await Places.sync({force: true})
  // await Roles.sync({force: true})
  // await Users.sync({force: true})

  await Roles.bulkCreate([
    { name: "admin", id: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473" },
    { name: "programmer", id: "b9d456a0-7ace-4493-9e61-9f3efa7090e8" },
    { name: "technical", id: "fef3a08d-2cec-4728-9745-7cbd2b37e557" },
    { name: "owner", id: "97006fe0-4a35-47f4-bfbf-fc962e5fe500" }
  ], { validate: true })
  await Users.bulkCreate([
    {
      id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      firstName: "admin",
      lastName: "admin",
      gender: "male",
      email: "admin@gmail.com",
      password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
      phone: "1234567890",
      birthdayDate: "2000/10/22",
      dni: "",
      address: "",
      roleId: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
      profileImage: "asd.com",
      status: "active",
      verified: false,
      watchActivities: true,
      watchDocumentation: true,
      watchHome: true,
      watchInventaries: true,
      watchMyHome: true,
      watchProjects: true,
      watchTasks: true,
      watchUsers: true,
      createOrEditActivities: true,
      createOrEditArea: true,
      createOrEditAccount: true,
      createOrEditGuide: true,
      createOrEditInventary: true,
      createOrEditMaterial: true,
      createOrEditNote: true,
      createOrEditProject: true,
      createOrEditBackup: true,
      createOrEditTask: true,
      createOrEditUser: true
    },
    {
      id: "2fcd766a-6568-4458-8fb1-21d2bda162c6",
      firstName: "programmer",
      lastName: "programmer",
      gender: "male",
      email: "programmer@gmail.com",
      password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
      phone: "1234567890",
      birthdayDate: "2000/10/22",
      dni: "",
      address: "",
      roleId: "b9d456a0-7ace-4493-9e61-9f3efa7090e8",
      profileImage: "asd.com",
      status: "active",
      verified: false
    },
    {
      id: "0ccef760-ca64-4ce7-947d-2c144f96b671",
      firstName: "technical",
      lastName: "technical",
      gender: "male",
      email: "technical@gmail.com",
      password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
      phone: "1234567890",
      birthdayDate: "2000/10/22",
      dni: "",
      address: "",
      roleId: "fef3a08d-2cec-4728-9745-7cbd2b37e557",
      profileImage: "asd.com",
      status: "active",
      verified: false
    },
    {
      id: "a1318da8-997f-4960-82ed-15aa8a5ffc9a",
      firstName: "owner",
      lastName: "owner",
      gender: "male",
      email: "owner@gmail.com",
      password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
      phone: "1234567890",
      birthdayDate: "2000/10/22",
      dni: "",
      address: "",
      roleId: "97006fe0-4a35-47f4-bfbf-fc962e5fe500",
      profileImage: "asd.com",
      status: "active",
      verified: false
    }

  ], { validate: true })
  await Projects.bulkCreate([
    {
      id: "4bd20dfc-17bd-4557-99d2-adc0ca7da2c5",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      name: "xxx",
      address: "el infierno",
      coordinates: "666",
      reference: "el crujir de dientes colonia el diablito",
      city: "ardiente",
      state: "muy Hot",
      country: "Fuego arrazador"
    },
    {
      id: "12a1166e-6945-45b6-85ef-aca1134e6776",
      userId: "2fcd766a-6568-4458-8fb1-21d2bda162c6",
      name: "yyy",
      address: "el infierno",
      coordinates: "666",
      reference: "el crujir de dientes colonia el diablito",
      city: "ardiente",
      state: "muy Hot",
      country: "Fuego arrazador"
    },
    {
      id: "b880fd77-6b3c-4b4f-84c7-bc5083d0959a",
      userId: "0ccef760-ca64-4ce7-947d-2c144f96b671",
      name: "zzz",
      address: "el infierno",
      coordinates: "666",
      reference: "el crujir de dientes colonia el diablito",
      city: "ardiente",
      state: "muy Hot",
      country: "Fuego arrazador"
    }
  ], { validate: true })
  await Accounts.bulkCreate([
    {
      id: "2e1c6462-f64c-4b84-806f-8e74a7376384",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      projectId: "4bd20dfc-17bd-4557-99d2-adc0ca7da2c5",
      accountName: "sonos",
      owner: "666",
      user: "Hot",
      password: "1234",
      software: "App"
    },
    {
      id: "75200366-d396-454d-8f07-3b50aa9b51e1",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      projectId: "4bd20dfc-17bd-4557-99d2-adc0ca7da2c5",
      accountName: "sonos",
      owner: "666",
      user: "Hot",
      password: "1234",
      software: "App"
    },
    {
      id: "b8422f4c-a13f-4983-bff1-f5503d23f8e6",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      projectId: "b880fd77-6b3c-4b4f-84c7-bc5083d0959a",
      accountName: "sonos",
      owner: "666",
      user: "Hot",
      password: "1234",
      software: "App"
    }
  ], { validate: true })
  await Inventories.bulkCreate([
    {
      id: "cb356369-10a7-45f0-8a82-5a041df09c06",
      name: "tools"
    },
    {
      id: "53f9f16c-76af-4353-9969-3f4676397224",
      name: "devices"
    },
    {
      id: "624a47c0-b5f5-4c0a-91b3-7a00782d18bd",
      name: "utilities"
    },
    {
      id: "7883063c-8e3a-42b4-aa6a-04013a9289a6",
      name: "products"
    }
  ], { validate: true })
  await Rooms.bulkCreate([
    {
      id: "cbdfc4c8-5a38-4b94-851a-a4ca2ce7fd9d",
      name: "primero",
      projectId: "12a1166e-6945-45b6-85ef-aca1134e6776",
      updatedAt: "2022-10-05T03:34:31.726Z",
      createdAt: "2022-10-05T03:34:31.726Z"
    },
    {
      id: "3189984c-0fd0-40cd-8516-30079a845b8e",
      name: "segundo",
      projectId: "b880fd77-6b3c-4b4f-84c7-bc5083d0959a",
      updatedAt: "2022-10-05T03:34:31.726Z",
      createdAt: "2022-10-05T03:34:31.726Z"
    },
    {
      id: "c4e2251e-a640-4126-be44-c44196b9f10d",
      name: "tercero",
      projectId: "4bd20dfc-17bd-4557-99d2-adc0ca7da2c5",
      updatedAt: "2022-10-05T03:34:31.726Z",
      createdAt: "2022-10-05T03:34:31.726Z"
    },
    {
      id: "f0babb16-4e3f-4733-9102-abe73cd6161e",
      name: "cuarto",
      projectId: "12a1166e-6945-45b6-85ef-aca1134e6776",
      updatedAt: "2022-10-05T03:34:31.726Z",
      createdAt: "2022-10-05T03:34:31.726Z"
    }
  ], { validate: true })
  await Tasks.bulkCreate([
    {
      id: "e889af51-ef94-46ea-b8f5-b681cabb9d1c",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      description: "description",
      roomId: "cbdfc4c8-5a38-4b94-851a-a4ca2ce7fd9d",
      executionDate: "2022/02/03"
    },
    {
      id: "f051a92e-b74c-4d6d-b66e-8e0ab7e91d2e",
      userId: "2fcd766a-6568-4458-8fb1-21d2bda162c6",
      description: "description",
      roomId: "3189984c-0fd0-40cd-8516-30079a845b8e",
      executionDate: "2022/02/03"
    },
    {
      id: "8c53f0b5-49ad-45e7-9baf-578a285ad122",
      userId: "0ccef760-ca64-4ce7-947d-2c144f96b671",
      description: "description",
      roomId: "c4e2251e-a640-4126-be44-c44196b9f10d",
      executionDate: "2022/02/03"
    },
    {
      id: "299b2cad-56bb-42e7-8510-053dc84daecc",
      userId: "a1318da8-997f-4960-82ed-15aa8a5ffc9a",
      description: "description",
      roomId: "f0babb16-4e3f-4733-9102-abe73cd6161e",
      executionDate: "2022/02/03"
    }
  ], { validate: true })
  await Activities.bulkCreate([
    {
      id: "ce821d18-dab1-4c33-bc98-6c681ba327b4",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      description: "textsss",
      isfinished: false,
      iscanceled: false,
      createdAt: "2022-10-07T02:16:01.871Z",
      updatedAt: "2022-10-07T02:16:01.871Z",
      taskId: "e889af51-ef94-46ea-b8f5-b681cabb9d1c"
    },
    {
      id: "afa125b6-db8e-4abd-9e3e-28d54142b38f",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      description: "textsss",
      isfinished: false,
      iscanceled: false,
      createdAt: "2022-10-07T02:16:02.731Z",
      updatedAt: "2022-10-07T02:16:02.731Z",
      taskId: "e889af51-ef94-46ea-b8f5-b681cabb9d1c"
    },
    {
      id: "13599ff3-25c2-4428-a2c2-9e4894cfd6af",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      description: "textsss",
      isfinished: false,
      iscanceled: false,
      createdAt: "2022-10-07T02:16:03.286Z",
      updatedAt: "2022-10-07T02:16:03.286Z",
      taskId: "e889af51-ef94-46ea-b8f5-b681cabb9d1c"
    },
    {
      id: "44481f9b-32f2-4dd3-8fc7-801e5f00e71d",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      description: "textsss",
      isfinished: false,
      iscanceled: false,
      createdAt: "2022-10-07T02:16:03.403Z",
      updatedAt: "2022-10-07T02:16:03.403Z",
      taskId: "e889af51-ef94-46ea-b8f5-b681cabb9d1c"
    }
  ], { validate: true })
  await UsersImages.create({
    id: "5b793ee8-f4b6-46c7-9152-f12dd66884de",
    url: "https://youtu.be/xAc23Dx-63Y",
    userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    updatedAt: "2022-09-12T05:11:34.016Z",
    createdAt: "2022-09-12T05:11:34.016Z"
  })
  await Material.bulkCreate([
    {
      id: "6ea3be59-99a4-4136-9047-9c7f0825518e",
      name: "TEXT",
      model: "xxx",
      amount: 555,
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      inventoryId: "cb356369-10a7-45f0-8a82-5a041df09c06",
      projectId: "4bd20dfc-17bd-4557-99d2-adc0ca7da2c5",
      returned: false,
      createdAt: "2022-10-07T03:13:28.662Z",
      updatedAt: "2022-10-07T03:13:28.662Z"
    },
    {
      id: "7909f627-f871-4b8f-9c8c-9ec27abb5f63",
      name: "TEXT",
      amount: 555,
      model: "xxx",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      inventoryId: "cb356369-10a7-45f0-8a82-5a041df09c06",
      projectId: "4bd20dfc-17bd-4557-99d2-adc0ca7da2c5",
      returned: false,
      createdAt: "2022-10-07T03:13:29.108Z",
      updatedAt: "2022-10-07T03:13:29.108Z"
    },
    {
      id: "001285b2-0514-4a41-b258-0edf3900c1c5",
      name: "TEXT",
      amount: 555,
      model: "xxx",
      userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      inventoryId: "cb356369-10a7-45f0-8a82-5a041df09c06",
      //projectId: "4bd20dfc-17bd-4557-99d2-adc0ca7da2c5",
      returned: false,
      createdAt: "2022-10-07T03:13:29.292Z",
      updatedAt: "2022-10-07T03:13:29.292Z"
    }
  ], { validate: true })
  await Programming.bulkCreate([
    {
      "id": "7563adda-ecc9-4ae1-a7f6-e4420a8bf210",
      "name": "text",
      "datasheet": "https://www.bookbenefits.com/",
      "guide": "https://www.bookbenefits.com/",
      "tutorial": "https://www.bookbenefits.com/",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "createdAt": "2022-10-24T00:08:33.053Z",
      "updatedAt": "2022-10-24T00:08:33.053Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      }
    },
    {
      "id": "87dc91a6-9e12-4691-8ab8-11bfbf1ee629",
      "name": "text",
      "datasheet": "https://www.bookbenefits.com/",
      "guide": "https://www.bookbenefits.com/",
      "tutorial": "https://www.bookbenefits.com/",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "createdAt": "2022-10-24T00:08:42.115Z",
      "updatedAt": "2022-10-24T00:08:42.115Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      }
    },
    {
      "id": "21b65547-dc19-4c18-ab8d-8fb8326694a5",
      "name": "text",
      "datasheet": "https://www.bookbenefits.com/",
      "guide": "https://www.bookbenefits.com/",
      "tutorial": "https://www.bookbenefits.com/",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "createdAt": "2022-10-24T00:08:42.219Z",
      "updatedAt": "2022-10-24T00:08:42.219Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      }
    },
    {
      "id": "7d2db61f-b71b-425e-b420-567ec74a62a6",
      "name": "text",
      "datasheet": "https://www.bookbenefits.com/",
      "guide": "https://www.bookbenefits.com/",
      "tutorial": "https://www.bookbenefits.com/",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "createdAt": "2022-10-24T00:08:42.492Z",
      "updatedAt": "2022-10-24T00:08:42.492Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      }
    },
  ], { validate: true })

  await Note.bulkCreate([
    {
      "id": "d097f0d6-5ee8-48f4-ab29-8c16feb1eb17",
      "note": "xxxx",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "createdAt": "2022-10-24T00:58:47.613Z",
      "updatedAt": "2022-10-24T00:58:47.613Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      }
    },
    {
      "id": "1d043ee2-c7da-45d8-9564-e1282e92447a",
      "note": "xxxx",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "createdAt": "2022-10-24T00:59:01.493Z",
      "updatedAt": "2022-10-24T00:59:01.493Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      }
    },
    {
      "id": "5da39239-990e-4510-ae84-ca838cbb656c",
      "note": "xxxx",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "createdAt": "2022-10-24T00:59:01.756Z",
      "updatedAt": "2022-10-24T00:59:01.756Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      }
    }
  ], { validate: true })

  await Backup.bulkCreate([
    {
      "id": "a80e70f8-ee09-48a4-9f30-8bb1b589bc30",
      "software": "text",
      "version": "text",
      "name": "text",
      "backup": "https://www.youtube.com/watch?v=7LqfvcfnrkQ",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "projectId": "12a1166e-6945-45b6-85ef-aca1134e6776",
      "date": "2022-10-20",
      "createdAt": "2022-10-24T01:44:32.723Z",
      "updatedAt": "2022-10-24T01:44:32.723Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      },
      "project": {
        "id": "12a1166e-6945-45b6-85ef-aca1134e6776",
        "userId": "2fcd766a-6568-4458-8fb1-21d2bda162c6",
        "plane": null,
        "name": "yyy",
        "address": "el infierno",
        "coordinates": "666",
        "reference": "el crujir de dientes colonia el diablito",
        "city": "ardiente",
        "state": "muy Hot",
        "country": "Fuego arrazador",
        "createdAt": "2022-10-24T01:44:07.688Z",
        "updatedAt": "2022-10-24T01:44:07.688Z"
      }
    },
    {
      "id": "a9b72807-ac4c-4c7a-980f-e94f6619c9d9",
      "software": "text",
      "version": "text",
      "name": "text",
      "backup": "https://www.youtube.com/watch?v=7LqfvcfnrkQ",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "projectId": "12a1166e-6945-45b6-85ef-aca1134e6776",
      "date": "2022-10-20",
      "createdAt": "2022-10-24T01:44:36.436Z",
      "updatedAt": "2022-10-24T01:44:36.436Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      },
      "project": {
        "id": "12a1166e-6945-45b6-85ef-aca1134e6776",
        "userId": "2fcd766a-6568-4458-8fb1-21d2bda162c6",
        "plane": null,
        "name": "yyy",
        "address": "el infierno",
        "coordinates": "666",
        "reference": "el crujir de dientes colonia el diablito",
        "city": "ardiente",
        "state": "muy Hot",
        "country": "Fuego arrazador",
        "createdAt": "2022-10-24T01:44:07.688Z",
        "updatedAt": "2022-10-24T01:44:07.688Z"
      }
    },
    {
      "id": "237ea18e-29d4-4c64-a9ce-bb2c4837b136",
      "software": "text",
      "version": "text",
      "name": "text",
      "backup": "https://www.youtube.com/watch?v=7LqfvcfnrkQ",
      "userId": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      "projectId": "12a1166e-6945-45b6-85ef-aca1134e6776",
      "date": "2022-10-20",
      "createdAt": "2022-10-24T01:44:36.545Z",
      "updatedAt": "2022-10-24T01:44:36.545Z",
      "user": {
        "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        "firstName": "admin",
        "lastName": "admin",
        "gender": "male",
        "email": "admin@gmail.com",
        "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        "phone": "1234567890",
        "birthdayDate": "2000-10-22",
        "dni": "",
        "address": "",
        "profileImage": "asd.com",
        "taskId": null,
        "projectId": null,
        "status": "active",
        "verified": false,
        "createdAt": "2000-01-01T06:00:00.000Z",
        "updatedAt": "2000-01-01T06:00:00.000Z",
        "roleId": "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"
      },
      "project": {
        "id": "12a1166e-6945-45b6-85ef-aca1134e6776",
        "userId": "2fcd766a-6568-4458-8fb1-21d2bda162c6",
        "plane": null,
        "name": "yyy",
        "address": "el infierno",
        "coordinates": "666",
        "reference": "el crujir de dientes colonia el diablito",
        "city": "ardiente",
        "state": "muy Hot",
        "country": "Fuego arrazador",
        "createdAt": "2022-10-24T01:44:07.688Z",
        "updatedAt": "2022-10-24T01:44:07.688Z"
      }
    }
  ], { validate: true })
  /*
  await Users.create({
    id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    firstName: "Sahid",
    lastName: "Kick",
    gender: "male",
    email: "sahid.kick@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    phone: "1234567890",
    birthdayDate: "2000/10/22",
    dni: "",
    address: "",
    roleId: "fef3a08d-2cec-4728-9745-7cbd2b37e557",
    profileImage: "asd.com",
    status: "active",
    verified: false
  })
  await Users.create({
    id: "7b6fc3bd-14b6-4090-a64e-d3f840a6bc6e",
    firstName: "Sahid",
    lastName: "Kick",
    gender: "male",
    email: "iasiba@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    phone: "1234567890",
    birthdayDate: "2000/10/22",
    dni: "",
    address: "",
    roleId: "fef3a08d-2cec-4728-9745-7cbd2b37e557",
    profileImage: "asd.com",
    status: "active",
    verified: false
  })
  await Users.create({
    id: "22bb2f9a-89fa-4071-a30c-97857df46991",
    firstName: "Sah",
    lastName: "Ki",
    gender: "male",
    email: "io@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    phone: "1234567890",
    birthdayDate: "2000/10/22",
    dni: "",
    address: "",
    roleId: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
    profileImage: "asd.com",
    status: "active",
    verified: false
  })
  /*
  await Places.bulkCreate([
    {
      id: '864ee3c2-facd-4a23-8b4a-4e9d342d9036',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
      city: 'Zapopan',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: '3436a556-6623-40ba-88b8-2e01009f9d82',
      city: 'Suba',
      state: 'Bogotá',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: '134a55b6-487c-46cc-a5b5-9392af20c205',
      city: 'Medellín',
      state: 'Antioquia',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: '3a230417-80ae-4232-a8ff-6fd50068a777',
      city: 'Azcapotzalco',
      state: 'CDMX',
      country: 'México',
      continent: 'America'
    },
    {
      id: '0d907427-7623-4ec9-8c6d-270bb92fbbe7',
      city: 'Monterrey',
      state: 'Muevo León',
      country: 'México',
      continent: 'America'
    },
  ])
  await Accommodations.create({
    id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    title: "premium - vistas 360 ciudad (alberca y gym)",
    description: "asd",
    guests: 6,
    rooms: 3,
    beds: 3,
    bathrooms: 4.5,
    price: 1536.00,
    userId: '7b6fc3bd-14b6-4090-a64e-d3f840a6bc6e',
    score: 0.00,
    placeId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
    commision: 150.00
  })
  await Accommodations.create({
    id: "aab040fc-d538-4487-aebc-7ca42374532a",
    title: "XXX - vistas 360 ciudad (alberca y gym)",
    description: "asd",
    guests: 6,
    rooms: 3,
    beds: 3,
    bathrooms: 4.5,
    price: 1536.00,
    userId: '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
    score: 0.00,
    placeId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
    commision: 150.00
  })
  await Accommodations.create({ 
    id: "74ec4476-99b0-4756-bab2-1679540a28e8",
    title: "ciudad (alberca y gym)",
    description: "reyery",
    guests: 6,
    rooms: 3,
    beds: 3,
    bathrooms: 4.5,
    price: 1536.00,
    userId: '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
    score: 0.00,
    placeId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
    commision: 150.00
  })
  await Reservations.create({
    id:"7fc1b2fc-398b-4364-a9b2-d1f42f0f6766",
    userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    arrival: "2010/10/22",
    departure: "2000/11/22",
    acomodationId: "aab040fc-d538-4487-aebc-7ca42374532a",
    adults: 5,
    kids: 4,
    babies: 3,
    pets: 2,
    score: 0,
    is_finished: false,
    is_canceled: false
  })
  await Reservations.create({
    id:"7b582781-ef1c-4904-9c30-e7b46fb0d6ff",
    userId: "7b6fc3bd-14b6-4090-a64e-d3f840a6bc6e",
    arrival: "2010/10/22",
    departure: "2000/11/22",
    acomodationId: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    adults: 5,
    kids: 4,
    babies: 3,
    pets: 2,
    score: 0,
    is_finished: false,
    is_canceled: false
  })
  await Reservations.create({
    id:"32240c33-fb5f-43b5-b926-52a13d25253c",
    userId: "22bb2f9a-89fa-4071-a30c-97857df46991",
    arrival: "2010/10/22",
    departure: "2000/11/22",
    acomodationId: "74ec4476-99b0-4756-bab2-1679540a28e8",
    adults: 5,
    kids: 4,
    babies: 3,
    pets: 2,
    score: 0,
    is_finished: false,
    is_canceled: false
  })

  await acomodation_images.create(
    {
      id: "debc3cd6-c7b7-42fe-9679-7350b7106236",
      url: "https://youtu.be/P6UlcpUAtvQ",
      Name: "tjfa",
      acomodationId: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50"
    }
  )
  await acomodation_images.create(
    {
      id: "c7c3a515-3246-4dff-a93e-8f707a92afeb",
      url: "https://youtu.be/P6UlcpUAtvQ",
      Name: "tjfa2",
      acomodationId: "74ec4476-99b0-4756-bab2-1679540a28e8"
    }
  )
  await acomodation_images.create(
    {
      id: "46e724a1-e070-4229-85d8-fcd3d1ddbf59",
      url: "https://youtu.be/P6UlcpUAtvQ",
      Name: "tjfa3",
      acomodationId: "aab040fc-d538-4487-aebc-7ca42374532a"
    }
  )*/
}
module.exports = generateData