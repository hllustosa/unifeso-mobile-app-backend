import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import SECRET from "../infra/secret.js";

export default class UserController {


  Init(server, repository) {
    server.post("/login", (request, response) => {
      repository.FindByName(request.body.username, (error, user) => {
        if (error) {
          console.log(error);
          return response.status(500).send({});
        }

        if (!user) {
          return response.status(401).send({ auth: false, token: null });
        }

        var passwordIsValid = bcrypt.compareSync(
          request.body.password,
          user.password
        );

        if (!passwordIsValid)
          return response.status(401).send({ auth: false, token: null });

        var token = jwt.sign({ id: user._id }, SECRET, {
          expiresIn: 86400, // expira em 24 horas
        });

        response.status(200).send({ auth: true, token: token });
      });
    });

    return "";
  }
}
