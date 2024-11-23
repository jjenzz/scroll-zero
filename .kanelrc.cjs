const { makeKyselyHook } = require('kanel-kysely');

/** @type {import('kanel').Config} */
module.exports = {
  connection: {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'scroll',
  },

  preDeleteOutputFolder: true,
  outputPath: './src/server/schemas',
  preRenderHooks: [makeKyselyHook()],

  customTypeMap: {
    'pg_catalog.tsvector': 'string',
    'pg_catalog.bpchar': 'string',
  },
};
