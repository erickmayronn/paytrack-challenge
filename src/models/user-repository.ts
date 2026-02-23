import { User } from './user-model';
import { getDatabase } from '../config/database';

export class UserRepository {
  async createUser(user: User): Promise<void | Error> {
    try {
      const db = await getDatabase();

      await db.run(
        `
          INSERT INTO usuarios (
            email, sexo, nome, sobrenome, data_nascimento, celular, pais
          ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        user.email,
        user.sexo,
        user.nome,
        user.sobrenome,
        user.data_nascimento,
        user.celular,
        user.pais,
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
          UPDATE usuarios SET
            sexo = ?,
            nome = ?,
            sobrenome = ?,
            data_nascimento = ?,
            celular = ?,
            pais = ?
          WHERE email = ? 
        `,
        user.sexo,
        user.nome,
        user.sobrenome,
        user.data_nascimento,
        user.celular,
        user.pais,
        user.email,
      );
    } catch (error) {
      return error as Error;
    }
  }

  async findByEmail(email: string): Promise<User | null | Error> {
    try {
      const db = await getDatabase();

      const user = await db.get(
        `SELECT * FROM usuarios WHERE email = ?`,
        email,
      );
      return user as User | null;
    } catch (error) {
      return error as Error;
    }
  }
}
