import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database;

export async function getDatabase(): Promise<Database> {
  if (!db) {
    db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database,
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS usuarios (
        email TEXT PRIMARY KEY,
        sexo TEXT NOT NULL,
        nome TEXT NOT NULL,
        sobrenome TEXT NOT NULL,
        data_nascimento TEXT NOT NULL,
        celular TEXT NOT NULL,
        pais TEXT NOT NULL
      )
    `);
  }

  return db;
}
