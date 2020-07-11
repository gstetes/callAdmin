// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dev.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SCHEMA,
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

};
