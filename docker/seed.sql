DROP TABLE IF EXISTS "user", "collection", "resource";

CREATE DATABASE scroll;
CREATE DATABASE scroll_cvr;
CREATE DATABASE scroll_cdb;

\c scroll;

CREATE TABLE "user" (
  "id" VARCHAR PRIMARY KEY,
  "name" VARCHAR NOT NULL
);

CREATE TABLE "collection" (
  "id" VARCHAR PRIMARY KEY,
  "ownerId" VARCHAR REFERENCES "user"(id),
  "name" VARCHAR NOT NULL
);

CREATE TABLE "resource" (
  "id" VARCHAR PRIMARY KEY,
  "collectionId" VARCHAR REFERENCES "collection"(id),
  "title" VARCHAR NOT NULL,
  "url" VARCHAR NOT NULL,
  "payload" JSONB NOT NULL
);

INSERT INTO "user" (id, name) VALUES ('ycD76wW4R2', 'TestUser');