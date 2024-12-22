import { type Row, createSchema, createTableSchema, definePermissions } from '@rocicorp/zero';

const userSchema = createTableSchema({
  tableName: 'user',
  columns: {
    id: 'string',
    name: 'string',
  },
  primaryKey: 'id',
});

const collectionSchema = createTableSchema({
  tableName: 'collection',
  columns: {
    id: 'string',
    ownerId: 'string',
    name: 'string',
  },
  primaryKey: ['id'],
  relationships: {
    user: {
      sourceField: 'ownerId',
      destSchema: userSchema,
      destField: 'id',
    },
  },
});

const resourceSchema = createTableSchema({
  tableName: 'resource',
  columns: {
    id: 'string',
    collectionId: 'string',
    title: 'string',
    url: 'string',
    payload: 'json',
  },
  primaryKey: ['id'],
  relationships: {
    collection: {
      sourceField: 'collectionId',
      destSchema: collectionSchema,
      destField: 'id',
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

export const permissions = definePermissions(schema, () => {
  return {};
});

export type TableSchema = ReturnType<typeof createTableSchema>;
export type User = Row<typeof userSchema>;
export type Collection = Row<typeof collectionSchema>;
export type Resource = Row<typeof resourceSchema>;
export type Schema = typeof schema;
