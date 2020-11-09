const { response } = require("express");
// importar dependencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");
// iniciando o express
const server = express();
// utilizar o body da req

server.use(express.urlencoded({ extended: true }));

//utilizando arquivos estaticos
server.use(express.static("public"));

// configurar template engine
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");

// rota da aplicação
server.get("/", pages.index);
server.get("/orphanage", pages.orphanage);
server.get("/orphanages", pages.orphanages);
server.get("/create-orphanage", pages.createOrphanage);
server.post("/save-orphanage", pages.saveOrphanage);

// ligar o server
server.listen(5500);
