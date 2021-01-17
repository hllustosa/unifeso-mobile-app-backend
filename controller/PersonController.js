
export default class PersonController {

    Init(server, repository) {

        server.get("/people", (request, response) => {
            repository.RetrieveAll((error, result) => {
                if(error){
                    console.log(error);
                    return response.status(500).send({});
                }
                
                response.send(result);
            });
        });

        server.post("/people", (request, response) => {
            repository.Save(request.body, (error, result) => {
                if(error){
                    console.log(error);
                    return response.status(500).send({});
                }
                return response.status(201).send({});
            });
        });

        return "";
    }
}