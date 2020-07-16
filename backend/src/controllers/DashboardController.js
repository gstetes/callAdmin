const connection = require('../database/connection');

exports.index = async (req, res) => {
  const d = new Date();
  const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

  // Recupera total de registros de chamados HOJE
  const [countC] = await connection('call')
    .count('* as count')
    .where('date', date);

  const callsToday = countC.count;

  // Recupera total de registros de chamados
  const [countTC] = await connection('call')
    .count('* as count');

  const totalCalls = countTC.count;

  // Recupera total de registros de funcionários
  const [countW] = await connection('worker')
    .count('* as count');

  const totalWorkers = countW.count;

  // Recupera total de registros de usuários
  const [countU] = await connection('user')
    .count('* as count');

  const totalUsers = countU.count;

  // Cria objeto com todos os dados;
  const data = {
    calls: {
      today: callsToday,
      total: totalCalls,
    },
    workers: {
      total: totalWorkers,
    },
    users: {
      total: totalUsers,
    }
  };

  // Retorna como resposta;
  return res.json(data);
};