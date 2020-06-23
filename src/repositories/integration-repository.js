'use strict'

const conn = require('../connection');

exports.getRepositoryIntegrations = async (res) => {
    const CONN = global.conn.request();
    var query = await CONN.query('SELECT*FROM rm_integration', res)
    return query;
},

exports.getRepositoryCountries = async (res) => {
    const CONN = global.conn.request();
    var query = await CONN.query('SELECT*FROM countries', res)
    return query;
},

exports.getRepositoryStates = async (country_id, country_sigle, country_status, res) => {    
    console.log('repository: ', country_id, country_sigle, country_status)
    const CONN = global.conn.request();
    //var query = await CONN.query(`SELECT*FROM states WHERE country_id = ${country_id}`, res)
    var query = await CONN.query(`SELECT*FROM states 
                                  WHERE country_id = ${country_id} 
                                  AND country_sigle LIKE '%${country_sigle}%' 
                                  AND  country_status = ${country_status}`, res)
    return query;
},

exports.getRepositoryCities = async (id, res) => {
    console.log('repository: ', id);
    const CONN = global.conn.request();
    var query = await CONN.query('SELECT*FROM cities WHERE state_id = ' + id, res)
    return query;
},

exports.createRepositoryIntegration = async (
    nome, 
    cpf, 
    dtnasc, 
    email, 
    telefone,
    endereco,
    num,
    complemento,
    bairro,
    uf,
    cidade,
    pais,
    psel,
    unidade,
    curso,
    turno,
    forma_ingresso,
    hfilial) => {

    const CONN = global.conn.request();
    var query = await CONN.query(`INSERT INTO rm_integration 
                                  VALUES ('${nome}','${cpf}','${dtnasc}','${email}',
                                          '${telefone}','${endereco}','${num}',
                                          '${complemento}','${bairro}','${uf}',
                                          '${cidade}','${pais}','${psel}',
                                          '${unidade}','${curso}','${turno}',
                                          '${forma_ingresso}','${hfilial}')`);
    return query;
}