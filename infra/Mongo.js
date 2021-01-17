import Mongo from "mongodb";

const CONNECTION_URL = "mongodb+srv://mongo:mongo@cluster0.fe27t.mongodb.net/unifeso?retryWrites=true&w=majority" ;
const DATABASE_NAME = "unifeso";
const COLLECTION_NAME = "pessoas";

let collection = null;


export default function GetCollection(callback) {
    Mongo.MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        var database = client.db(DATABASE_NAME);
        collection = database.collection(COLLECTION_NAME);
        console.log("Connected to `" + DATABASE_NAME + "`!");
        callback(collection);
    });
}




