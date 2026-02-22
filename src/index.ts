import { UserService } from './services/userService';

async function main() {
  const userService = new UserService();

  try {
    const users = await userService.getUsers();
    console.log(users);
  } catch (error) {
    console.log('Error', error);
  }
}

main();
