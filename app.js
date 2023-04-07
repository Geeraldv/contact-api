const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

let contactos = JSON.parse(fs.readFileSync("contactos.json"));

app.get("/listar", (req, res) => {
  res.json(contactos);
});

app.post("/agregar", (req, res) => {
  contactos.push(req.body);

  fs.writeFileSync("contactos.json", JSON.stringify(contactos));

  res.json(contactos);
  console.log("se Agrego un nuevo contacto", req.body);
});

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
