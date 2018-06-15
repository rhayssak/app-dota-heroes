const promise = require('bluebird');
const options = {
    // Initialization Options
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://frtlcgwsrzswjs:61f790eebbcbce61e6877b66794d29b7e5cc644736fa160d3ea87f08c9502fb1@ec2-54-243-235-153.compute-1.amazonaws.com:5432/dcbn0nceif2kg?ssl=true';
const db = pgp(connectionString);

const GET_ALL_HERO = 'select * from heroes';
const GET_ALL_USER = 'select * from user';

const GET_HERO = 'select * from heroes where id_hero =';
const GET_USER_BY_UUID = 'select * from users where uuid =';
const CREATE_HERO = 'insert into heroes values'

// GET ALL
const getAllHeroes = function () {
    return new Promise((resolve, reject) => {
        db.any(GET_ALL_HERO)
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                reject(err)
            });
    })
}

const getAllUsers = function () {
    return new Promise((resolve, reject) => {
        db.any(GET_ALL_USER)
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                reject(err)
            });
    })
}


// GET ONE
const getHeroe = function (id) {
    return new Promise((resolve, reject) => {
        db.one(`${GET_HERO}${id}`)
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                reject(err)
            });
    })
}

const gerUserByUuid = function (uuid) {
    return new Promise((resolve, reject) => {
        db.one(`${GET_USER_BY_UUID}${uuid}`)
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                reject(err)
            });
    })
}

// CREATE 
const createHero = function (id, name) {

    return new Promise((resolve, reject) => {

        db.one(`${CREATE_HERO} (${id}, '${name}') returning id_hero`)
            .then(function (hero) {
                resolve(hero);
            })
            .catch(function (err) {
                reject(err)
            });
    });
}

module.exports = {
    getAllHeroes,
    getHeroe,
    gerUserByUuid,
    getAllUsers,
    createHero
}
