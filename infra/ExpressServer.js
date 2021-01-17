import Express from "express";
import BodyParser  from "body-parser";

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.listen(8080, () => {});

export default app;
