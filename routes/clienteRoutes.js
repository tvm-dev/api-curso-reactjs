const express = require("express");
const { listarClientes, criarCliente, atualizarCliente, deletarCliente } = require("../controllers/clienteController");

const router = express.Router();

router.get("/", listarClientes);
router.post("/", criarCliente);
router.put("/:id", atualizarCliente);
router.delete("/:id", deletarCliente);

module.exports = router;
