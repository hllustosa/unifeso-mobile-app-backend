import SECRET from "../infra/secret.js";
import jwt from "jsonwebtoken";

export default class PersonController {
  Autheticate(request, callback) {
    var token = request.headers["x-access-token"];
    if (!token)
      return callback({ auth: false, message: "Nenhum token informado" });

    jwt.verify(token, SECRET, function (err, decoded) {
      if (err)
        return callback({
          auth: false,
          message: "Falha ao autenticar o token",
        });

      console.log("Requisição com JWT " + JSON.stringify(decoded));
      callback({ auth: true, message: "" });
    });
  }

  Init(server, repository, userRepository) {
    server.get("/people", (request, response) => {
      this.Autheticate(request, (authResult) => {
        if (!authResult.auth) return response.status(401).send(authResult);

        repository.RetrieveAll((error, result) => {
          if (error) {
            console.log(error);
            return response.status(500).send({});
          }

          response.send(result);
        });
      });
    });

    server.post("/people", (request, response) => {
      this.Autheticate(request, (authResult) => {
        if (!authResult.auth) return response.status(401).send(authResult);
        repository.Save(request.body, (error, result) => {
          if (error) {
            console.log(error);
            return response.status(500).send({});
          }
          return response.status(201).send({});
        });
      });
    });

    return "";
  }
}
