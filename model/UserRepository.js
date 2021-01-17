export default class UserRepository {
    
    userCollection = null;

    Init(collection) {
        this.userCollection = collection;
    }

    FindByName(name, callback) {
        this.userCollection.findOne({ username: name}, callback);
    }
}