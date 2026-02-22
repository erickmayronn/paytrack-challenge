import { UserService } from './services/userService';
import isLegalAge from './utils/age.validator';
import { SqliteUserRepository } from './infrastructure/user-repository';
import { User } from './types/user';

async function main() {
  const userService = new UserService();
  const relatory = {
    Quatity: 0,
    added: 0,
    updated: 0,
    updatedUser: [] as unknown as User[],
    ignored: 0,
    ignoredUsers: [] as unknown as User[],
    errors: [] as unknown as Error[],
  };

  try {
    const users: User[] = await userService.getUsers();
    const repository = new SqliteUserRepository();

    for (const user of users) {
      // const MockUser = {
      //   email: 'hannah65@example.com',
      //   gender: 'male',
      //   first_name: 'Donald',
      //   last_name: 'Anderson',
      //   dob: '1952-04-28',
      //   cell: '3774869149',
      //   country: 'Croatia',
      // };
      relatory.Quatity++;

      if (isLegalAge(user.dob)) {
        const existingUser = await repository.findByEmail(user.email);

        existingUser
          ? (await repository.updateUser(user),
            relatory.updated++,
            relatory.updatedUser.push(user))
          : (await repository.createUser(user), relatory.added++);
      } else {
        relatory.ignoredUsers.push(user);
        relatory.ignored++;
      }
    }
  } catch (error) {
    console.log('Error processing users:', error);
    relatory.errors.push(error as Error);
  }

  console.log('relatory', relatory);
}

main();
