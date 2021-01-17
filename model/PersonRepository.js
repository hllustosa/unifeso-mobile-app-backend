export default class PersonRepository {
    
    peopleCollection = null;

    Init(collection) {
        this.peopleCollection = collection;
    }

    Save(person, callback) {
        this.peopleCollection.insert(person, callback);
    }

    RetrieveAll(callback) {
        this.peopleCollection.find({}).toArray(callback);
    }
}