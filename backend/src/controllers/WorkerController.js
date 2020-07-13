const connection = require('../database/connection');

exports.index = async (req, res) => {
  // Receber todos workers em uma variavel
  const workers = await connection('worker')
    .select('*');

  // Retornar workers como resposta
  return res.json(workers);
};

exports.search = async (req, res) => {
  // Receber ID do funcionário
  const { id } = req.params;

  // Pesquisar funcionário no banco de dados
  const worker = await connection('worker')
    .select('*')
    .where('id', id)
    .first();

  // Verificar existência do funcionário no banco de dados
  if (!worker) {
    return res.status(400)
      .json({ error: 'This worker is not registered.' });
  }

  // Retornar informações de funcionário como resposta
  return res.json(worker);
};

exports.create = async (req, res) => {
  // Receber os dados do funcionário
  const { name, ramal, section } = req.body;

  // Criar objeto com os dados do funcionário
  const data = {
    name,
    section,
    ramal,
  };

  // Cadastrar no banco de dados
  try {
    await connection('worker')
      .insert(data);
  } catch (err) {
    return res.status(400)
      .json(err);
  }

  // Retornar informações do funcionário como resposta
  return res.json(data);
};

exports.update = async (req, res) => {
  // Receber ID do funcionário
  const { id } = req.params;

  // Receber dados para alteração do funcionário
  const { name, ramal, section } = req.body;

  // Recuperar funcionario do banco de dados
  const worker = await connection('worker')
    .select('*')
    .where('id', id)
    .first();

  // Verificar existência do funcionário no banco de dados
  if (!worker) {
    return res.status(400)
      .json({ error: 'Worker not exists!' });
  }

  // Criar objeto com novos dados
  const data = {
    name,
    section,
    ramal,
  };

  // Alterar registro de funcionário
  try {
    await connection('worker')
      .where('id', id)
      .update(data);
  } catch (err) {
    return res.status(400)
      .json(err);
  }

  // Retonar novo registro como resposta
  return res.json(data);
};

exports.delete = async (req, res) => {
  // Receber ID do funcionário
  const { id } = req.params;

  // Recuperar funcionário do banco de dados
  const worker = await connection('worker')
    .where('id', id)
    .first();

  // Verificar existência no banco de dados
  if (!worker) {
    return res.status(400)
      .json({ error: 'Worker not exists!' });
  }

  // Deletar usuário
  try {
    await connection('worker')
      .where('id', id)
      .delete();
  } catch (err) {
    return res.status(400)
      .json(err);
  }

  // Retornar resposta
  return res.json({ message: 'Worker has been deleted.' });
};
