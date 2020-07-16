const connection = require('../database/connection');

exports.index = async (req, res) => {
  // Recuperar data
  const { date } = req.query;

  // Recupera todos os registros do banco de dados
  let calls;

  if (date !== '') {
    calls = await connection('call')
      .join('worker', 'worker.id', '=', 'call.id_worker')
      .select([
        'call.*',
        'worker.name',
      ])
      .where('call.date', date)
      .orderBy('call.emergency', 'desc');
  } else {
    calls = await connection('call')
      .join('worker', 'worker.id', '=', 'call.id_worker')
      .select([
        'call.*',
        'worker.name',
      ])
      .orderBy('date', 'desc')
      .orderBy('time', 'desc');
  }


  // Retorna como resposta
  return res.json(calls);
};

exports.search = async (req, res) => {
  // Receber ID do chamado
  const { id } = req.params;

  // Buscar chamado no bando de dados
  const call = await connection('call')
    .join('worker', 'worker.id', '=', 'call.id_worker')
    .select([
      'call.*',
      'worker.name',
    ])
    .where('call.id_call', id);

  // Verificar existência do chamado no banco de dados
  if (!call) {
    return res.status(400)
      .json({ error: 'Call not exists!' });
  }

  // Retornar como resposta
  return res.json(call);
};

exports.create = async (req, res) => {
  // Receber dados do chamado
  const { worker, detail, emergency } = req.body;

  // Criar objeto de dados
  const date = new Date();

  const data = {
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    time: `${date.getHours()}:${date.getMinutes()}`,
    id_worker: worker,
    detail,
    emergency,
    done: false,
  };

  // Adicionar ao banco de dados
  try {
    await connection('call')
      .insert(data);
  } catch (err) {
    return res.status(400)
      .json(err);
  }

  // Retornar dados do chamado como resposta
  return res.json(data);
};

exports.update = async (req, res) => {
  // Recebe ID do chamado
  const { id } = req.params;

  // Recebe dados para alteração
  const {
    worker, detail, emergency, done,
  } = req.body;

  // Recupera dados do banco de dados
  const call = await connection('call')
    .select('*')
    .where('id_call', id)
    .first();

  // Verifica existência do chamado
  if (!call) {
    return res.status(400)
      .json({ error: 'Call not exists!' });
  }

  // Criar objeto com novos dados
  const date = new Date();

  const data = {
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    time: `${date.getHours()}:${date.getMinutes()}`,
    id_worker: worker,
    detail,
    emergency,
    done,
  };

  // Alterar registro no banco de dados
  try {
    await connection('call')
      .select('*')
      .where('id_call', id)
      .first()
      .update(data);
  } catch (err) {
    return res.status(400)
      .json(err);
  }

  // Retorna novos dados como resposta
  return res.json(data);
};

exports.delete = async (req, res) => {
  // Recebe ID do chamado
  const { id } = req.params;

  // Busca dados no banco de dados
  const call = await connection('call')
    .where('id_call', id)
    .first();

  // Verifica existência no banco de dados
  if (!call) {
    return res.status(400)
      .json({ error: 'Call not exists.' });
  }

  // Exclui o registro
  try {
    await connection('call')
      .where('id_call', id)
      .first()
      .delete();
  } catch (err) {
    return res.status(400)
      .json(err);
  }

  // Retorna mensagem de resposta
  return res.json({ message: 'Call has been deleted.' });
};
