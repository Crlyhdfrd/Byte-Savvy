const Express = require("express")
const Session = require("express-session")
const Path = require("path")
const Handlebars = require("express-handlebars")
const Routes = require("./controllers")
const sequelize = require("./config/connection")

const server = Express()
const PORT = process.env.PORT || 3001
const sess = {secret: "game", resave: false, saveUnitialized: true}
server.use(Session(sess));

server.engine("handlebars", Handlebars.create().engine)

server.set("view engine", "handlebars")

server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));
server.use(Express.static(Path.join(__dirname, "public")));

server.use(Routes);

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log("Now listening 3001"))
});
