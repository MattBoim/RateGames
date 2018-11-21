var mongoose = require('mongoose');
var controller = require('./controllers');
module.exports = function(app){
    app.get('/games', controller.showAll);
    app.post('/new', controller.add);
    app.post('/:id', controller.addRating);
    app.delete('/destroy_data', controller.destroy_everything);
    // app.get('/tasks', controller.showAll);
    app.get('/:id/', controller.details);
    // app.post('/new/:name/:desc/', controller.add);
    // app.put('/:id/:name/:desc/', controller.update);
}