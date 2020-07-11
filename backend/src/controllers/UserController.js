const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

exports.index = async (req, res) => {
  //Receber todos os usuários em uma variável
  const users = await connection('user')
    .select('*');

  //Retornar usuários como resposta
  return res.json(users);
};

exports.search = async (req, res) => {
  //Receber o ID de um usuário
  const { id } = req.params;

  //Receber o usuário em uma variavel
  const user = await connection('user')
    .select('*')
    .where('id', id)
    .first();

  //Validar existencia do usuário
  if (!user) {
    return res.status(404)
      .json({ error: 'User not found.' });
  };

  //Retornar usuário como resposta
  return res.json(user);
};

exports.create = async (req, res) => {
  //Receber dados do usuario
  const { name, email, password } = req.body;

  //Verificar se o e-mail ja esta cadastrado
  const userEmail = await connection('user')
    .select('email')
    .where('email', email)
    .first();

  if (userEmail != undefined) {
    return res.status(400)
      .json({ error: 'This email is already registered.' });
  }

  //Gerar ID unico de usuário
  const id = crypto.randomBytes(5).toString('hex');

  //Gerar hash de senha do usuário
  const hashPass = await bcrypt.hash(password, 16);

  //Cadastrar usuário no banco de dados
  const user = {
    id,
    name,
    email,
    password: hashPass,
  };

  try {
    await connection('user')
      .insert(user);
  } catch (error) {
    return res.status(400)
      .json(error);
  }

  //Retornar usuário como resposta
  return res.json(user)
};

exports.update = async (req, res) => {
  //Recebe o ID do usuário
  const { id } = req.params;

  //Recebe os novos dados do usuário
  const { name, email, password } = req.body

  //Criar hash de senha
  const hashPass = await bcrypt.hash(password, 16);

  //Altera os dados no BD
  const data = {
    id,
    name,
    email,
    password: hashPass,
  };

  try {
    await connection('user')
      .select('*')
      .where('id', id)
      .first()
      .update(data);
  } catch (error) {
    return res.status(400)
      .json(error);
  }

  //Retornar usuário alterado como resposta
  return res.json(data);
};

exports.delete = async (req, res) => {
  //Recebe ID do usuário
  const { id } = req.params;

  //Valida se o usuário existe
  const user = await connection('user')
    .select('*')
    .where('id', id)
    .first();

  if (!user) {
    return res.status(400)
      .json({ error: 'User does not exists' });
  }

  //Deletar usuario do banco de dados
  try {
    await connection('user')
      .select('*')
      .where('id', id)
      .first()
      .delete();
  } catch (error) {
    return res.status(400)
      .json(error);
  }

  //Retorna resposta
  return res.json({ message: 'User has been deleted.' });
};