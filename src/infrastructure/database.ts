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
      CREATE TABLE IF NOT EXISTS users (
        email TEXT PRIMARY KEY,
        gender TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        dob TEXT NOT NULL,
        cell TEXT NOT NULL,
        country TEXT NOT NULL
      )
    `);
  }

  return db;
}
