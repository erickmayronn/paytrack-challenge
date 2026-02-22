import { getDatabase } from './database';
import { User } from '../types/user';

export class SqliteUserRepository {
  async createUser(user: User): Promise<void | Error> {
    try {
      const db = await getDatabase();

      await db.run(
        `
          INSERT INTO users (
            email, gender, first_name, last_name, dob, cell, country
          ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        user.email,
        user.gender,
        user.first_name,
        user.last_name,
        user.dob,
        user.cell,
        user.country,
      );
    } catch (error) {
      return error as Error;
    }
  }

  async updateUser(user: User): Promise<void | Error> {
    try {
      const db = await getDatabase();

      await db.run(
        `
          UPDATE users SET
            gender = ?,
            first_name = ?,
            last_name = ?,
            dob = ?,
            cell = ?,
            country = ?
          WHERE email = ? 
        `,
        user.gender,
        user.first_name,
        user.last_name,
        user.dob,
        user.cell,
        user.country,
        user.email,
      );
    } catch (error) {
      return error as Error;
    }
  }

  async findByEmail(email: string): Promise<User | null | Error> {
    try {
      const db = await getDatabase();

      const user = await db.get(`SELECT * FROM users WHERE email = ?`, email);
      return user as User | null;
    } catch (error) {
      return error as Error;
    }
  }
}
