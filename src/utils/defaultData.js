/*
const Accommodation_images = require("../models/acomodations.images.models");
const Accommodations = require("../models/acomodations.model");
const Places = require("../models/places.model");
const Reservations = require("../models/reservations.model");
*/
const Users = require("../models/user.model");
const Users_images = require("../models/users.images");
const Roles = require("../models/roles.model");
const Projects = require("../models/projects.model")
const Accounts = require("../models/accounts.model")
const Inventories = require("../models/inventories.model")
const Rooms =require("../models/rooms.model")
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
      verified: false
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
      projectId: "4bd20dfc-17bd-4557-99d2-adc0ca7da2c5",
      accountName: "sonos",
      owner: "666",
      user: "Hot",
      password: "1234",
      software: "App"
    },
    {
      id: "75200366-d396-454d-8f07-3b50aa9b51e1",
      projectId: "4bd20dfc-17bd-4557-99d2-adc0ca7da2c5",
      accountName: "sonos",
      owner: "666",
      user: "Hot",
      password: "1234",
      software: "App"
    },
    {
      id: "b8422f4c-a13f-4983-bff1-f5503d23f8e6",
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

  await Users_images.create({
    id: "5b793ee8-f4b6-46c7-9152-f12dd66884de",
    url: "https://youtu.be/xAc23Dx-63Y",
    userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    updatedAt: "2022-09-12T05:11:34.016Z",
    createdAt: "2022-09-12T05:11:34.016Z"
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