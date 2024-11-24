import { createSchema, createTableSchema, TableSchemaToRow } from '@rocicorp/zero';

const userSchema = createTableSchema({
  tableName: 'user',
  columns: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
  primaryKey: ['id'],
  relationships: {},
});

const collectionSchema = createTableSchema({
  tableName: 'collection',
  columns: {
    id: { type: 'string' },
    ownerId: { type: 'string' },
    name: { type: 'string' },
  },
  primaryKey: ['id'],
  relationships: {
    user: {
      source: 'ownerId',
      dest: {
        schema: () => userSchema,
        field: 'id',
      },
    },
  },
});

const resourceSchema = createTableSchema({
  tableName: 'resource',
  columns: {
    id: { type: 'string' },
    collectionId: { type: 'string' },
    title: { type: 'string' },
    url: { type: 'string' },
    payload: { type: 'json' },
  },
  primaryKey: ['id'],
  relationships: {
    collection: {
      source: 'collectionId',
      dest: {
        schema: () => collectionSchema,
        field: 'id',
      },
    },
  },
});

export const schema = createSchema({
  version: 1,
  tables: {
    user: userSchema,
    collection: collectionSchema,
    resource: resourceSchema,
  },
});

export type User = TableSchemaToRow<typeof userSchema>;
export type Collection = TableSchemaToRow<typeof collectionSchema>;
export type Resource = TableSchemaToRow<typeof resourceSchema>;
export type Schema = typeof schema;
export type TableSchema = ReturnType<typeof createTableSchema>;
