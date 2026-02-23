import { BaseService } from './base-service';
import { User, ApiUser } from '../models/user-model';
import { API_BASE_URL, API_KEY } from '../constants/env';
import { mapApiUserToUser } from '../services/user-mapper';
import { UserRepository } from '../models/user-repository';
import isLegalAge from '../utils/age-validator';
import { saveReport } from '../views/user-report';
import { Report } from '../models/report-model';

export class UserService extends BaseService {
  private userRepository: UserRepository = new UserRepository();

  constructor() {
    super(API_BASE_URL, {
      'X-Api-Key': API_KEY || '',
    });
  }

  async getUsers(): Promise<User[]> {
    const users = await this.get<ApiUser[]>('/randomuser?count=30');

    return users.map((user: ApiUser) => mapApiUserToUser(user));
  }

  async syncUsers() {
    const userReport: Report = {
      quantidade: 0,
      inicio_execucao: new Date().toISOString(),
      fim_execucao: null,
      usuarios_adicionados: 0,
      atualizados: 0,
      usuarios_atualizados: [],
      ignorados: 0,
      usuarios_ignorados: [],
      errors: [],
    };
    try {
      const users: User[] = await this.getUsers();

      for (const user of users) {
        userReport.quantidade++;

        if (isLegalAge(user.data_nascimento)) {
          const existingUser = await this.userRepository.findByEmail(
            user.email,
          );

          if (existingUser) {
            await this.userRepository.updateUser(user);
            userReport.atualizados++;
            userReport.usuarios_atualizados.push(user);
          } else {
            await this.userRepository.createUser(user);
            userReport.usuarios_adicionados++;
          }
        } else {
          userReport.usuarios_ignorados.push(user);
          userReport.ignorados++;
        }
      }
    } catch (error) {
      userReport.errors.push(error as Error);
    }
    userReport.fim_execucao = new Date().toISOString();
    saveReport(userReport);
  }
}
