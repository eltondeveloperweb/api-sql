const repository = require('../repositories/integration-repository');
const HttpStatus = require('http-status-codes');

exports.healthCheck = (req, res, next) => {
    res.status(200).json({ status: HttpStatus.OK,  message: 'HEALTH CHECK OK'});
};

exports.getIntegrations = async (req, res, next) => {
        await repository.getRepositoryIntegrations()
            .then(result => res.status(HttpStatus.OK).json({ code: HttpStatus.OK, message: result.recordset }))
            .catch(err => res.json(err));
};

exports.getCountries = async (req, res, next) => {
    await repository.getRepositoryCountries()
        .then(result => res.status(HttpStatus.OK).json({ code: HttpStatus.OK, message: result.recordset }))
        .catch(err => res.json(err));
};

exports.getStates = async (req, res, next) => {

    const { country_id, country_sigle, country_status } = req.body;
    console.log('controller: ', country_id, country_sigle, country_status);

    await repository.getRepositoryStates(country_id, country_sigle, country_status)        
        .then(result => res.status(HttpStatus.OK).json({ code: HttpStatus.OK, message: result.recordset }))
        .catch(err => res.json(err));
};

exports.getCities = async (req, res, next) => {

    const { state_id } = req.body;
    console.log('citiesController: ', state_id);

    await repository.getRepositoryCities(state_id)
        .then(result => res.status(HttpStatus.OK).json({ code: HttpStatus.OK, message: result.recordset }))
        .catch(err => res.json(err));
};

exports.createIntegration = async (req, res, next) => {

    console.log(req.body);

    const { 
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
            hfilial
         } = req.body;
    
    await repository.createRepositoryIntegration(
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
                hfilial)
            .then(result => res.status(HttpStatus.CREATED).json({message: 'Cadastrado com sucesso!',result: result}))
            .catch(err => res.json(err));
}