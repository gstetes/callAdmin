const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../database/connection');

exports.login = async (req, res) => {
  // Recebe email e senha do usuário
  const { email, password } = req.body;

  // Verifica se os dados correspondem corretamente ao usuário
  const user = await connection('user')
    .select('*')
    .where('email', email)
    .first();

  if (!user) {
    return res.status(400)
      .json({ error: 'User not found!' });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401)
      .json({ error: 'Unauthorized.' });
  }

  // Criar token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  // Retorna mensagem de resposta
  return res.json({
    auth: true,
    user: { name: user.name, email: user.email },
    token,
  });
};
