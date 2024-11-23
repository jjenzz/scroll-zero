// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { CollectionId } from './Collection';
import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

/** Identifier type for public.resource */
export type ResourceId = string & { __brand: 'ResourceId' };

/** Represents the table public.resource */
export default interface ResourceTable {
  id: ColumnType<ResourceId, ResourceId, ResourceId>;

  collectionId: ColumnType<CollectionId | null, CollectionId | null, CollectionId | null>;

  title: ColumnType<string, string, string>;

  url: ColumnType<string, string, string>;

  payload: ColumnType<unknown, unknown, unknown>;
}

export type Resource = Selectable<ResourceTable>;

export type NewResource = Insertable<ResourceTable>;

export type ResourceUpdate = Updateable<ResourceTable>;
