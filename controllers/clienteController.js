const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//=========================================

exports.listarClientes = async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.json(clientes);
};
//=========================================
exports.criarCliente = async (req, res) => {
  try {
    const { nome, telefone, email, endereco, idade } = req.body;
    const novoCliente = await prisma.cliente.create({
      data: { nome, telefone, email, endereco, idade },
    });
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar cliente", Details: error.message });
  }
};
//=========================================
exports.atualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone, email, endereco } = req.body;
    const clienteAtualizado = await prisma.cliente.update({
      where: { id },
      data: { nome, telefone, email, endereco },
    });
    res.json(clienteAtualizado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar cliente" });
  }
};
//=========================================
exports.deletarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.cliente.delete({ where: { id } });
    res.json({ message: "Cliente deletado com sucesso" });
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar cliente" });
  }
};
//=========================================