const queries = require('../queries/queries');

const getAllHeroes = function (req, res, next) {
    
    queries.getAllHeroes()
        .then( (heroes) => {
            console.log(heroes)

            if (heroes.length <= 0) {
                res.status(200)
                .json({
                    'status': 'success',
                    'data': heroes,
                    'message': 'Lista de Heróis vazia'
                })
            } else {
                res.status(200)
                .json({
                    'status': 'success',
                    'data': heroes,
                    'message': 'Lista de Heróis'
                })
            }

            
        })
        .catch( (error) => {
            console.log(error);
            return next(error);
        })

}
const createHero = function (req, res, next) {

    const id = req.body.id;
    const name = req.body.name;
    queries.getHeroe (id)
        .then((heroe) => {

            if (heroe) {
                res.status(500)
                .json({
                    'status': 'erro',
                    'data': heroe,
                    'message': 'Herói já cadastrado'
                })
            }

        })
        .catch( (err) => {
            queries.createHero(id, name)
                .then( (heroe) => {
        
                    if (heroe) {
                        res.status(200)
                        .json({
                            'status': 'success',
                            'data': heroe,
                            'message': 'Adicionado com sucesso'
                        })
                    } else {
                        res.status(500)
                        .json({
                            'status': 'error',
                            'data': {},
                            'message': 'Erro ao adicionar heroi'
                        })
                    }
        
                    
                })
                .catch( (error) => {
                    console.log(error);
                    return next(error);
                })
        });
}

module.exports = {
    getAllHeroes,
    createHero
};