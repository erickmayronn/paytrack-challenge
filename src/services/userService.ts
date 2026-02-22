import { BaseService } from './baseService';
import { User } from '../types/user';
import { API_BASE_URL, API_KEY } from '../constants/env';
import { ApiUser, mapApiUserToUser } from '../mappers/user-mapper';

export class UserService extends BaseService {
  constructor() {
    super(API_BASE_URL, {
      'X-Api-Key': API_KEY || '',
    });
  }

  async getUsers(): Promise<User[]> {
    const users = await this.get<ApiUser[]>('/randomuser?count=20');

    return users.map((user: ApiUser) => mapApiUserToUser(user));
  }
}
