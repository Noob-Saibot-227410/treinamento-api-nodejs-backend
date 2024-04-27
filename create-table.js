import { sql } from './db.js';

(async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS videos (
        title TEXT,
        description TEXT,
        duration INTEGER
      );
    `;
    console.log('Tabela criada!');
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  } finally {
    // Encerrar a conexão com o banco de dados se necessário
    // sql.end();
  }
})();