// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

/** Identifier type for zero_0.versionHistory */
export type VersionHistoryLock = string & { __brand: 'VersionHistoryLock' };

/** Represents the table zero_0.versionHistory */
export default interface VersionHistoryTable {
  lock: ColumnType<VersionHistoryLock, VersionHistoryLock | undefined, VersionHistoryLock>;

  dataVersion: ColumnType<number, number, number>;

  schemaVersion: ColumnType<number, number, number>;

  minSafeVersion: ColumnType<number, number, number>;
}

export type VersionHistory = Selectable<VersionHistoryTable>;

export type NewVersionHistory = Insertable<VersionHistoryTable>;

export type VersionHistoryUpdate = Updateable<VersionHistoryTable>;
