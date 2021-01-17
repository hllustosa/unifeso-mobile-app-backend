import server from './infra/ExpressServer.js';
import GetCollection from './infra/Mongo.js';
import PersonController from './controller/PersonController.js';
import PersonRepository from './model/PersonRepository.js';


GetCollection( collection => {
    var controller = new PersonController();
    var repository = new PersonRepository();
    repository.Init(collection);
    controller.Init(server, repository);
})
