import server from './infra/ExpressServer.js';
import { GetCollection, GetUserCollection} from './infra/Mongo.js';
import PersonController from './controller/PersonController.js';
import UserController from './controller/UserController.js';
import PersonRepository from './model/PersonRepository.js';
import UserRepository from './model/UserRepository.js';

GetCollection( collection => {
    var controller = new PersonController();
    var repository = new PersonRepository();
    repository.Init(collection);
    controller.Init(server, repository);
});

GetUserCollection( collection => {
    var controller = new UserController();
    var repository = new UserRepository();
    repository.Init(collection);
    controller.Init(server, repository);
})

