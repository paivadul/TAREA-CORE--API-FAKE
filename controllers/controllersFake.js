// const faker = require("faker");
const { faker } = require('@faker-js/faker');


//FUNCIONES QUE TRAEN DATOS DE FAKER
    const newUser = () => ({
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        cellphone: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    });

    const newCompany = () => ({
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetName(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country()
        }
    });


    //CONTROLADORES. Dentro de ellos se resguardan las funciones que llaman los datos faker
const getNewUser = (req, res)=> {
    res.json(newUser())
}

const getNewCompany = (req, res)=> {
    res.json(newCompany())
}

const getNewUserCompany = (req, res)=> {
    res.json({
        user: [newUser()],
        company: [newCompany()]
    }) 
}


//EXPORTACIÓN
module.exports = {
    getNewUser,
    getNewCompany,
    getNewUserCompany
}