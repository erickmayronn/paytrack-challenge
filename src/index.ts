import { UserService } from './services/user-service';

async function main() {
  const userService = new UserService();

  await userService.syncUsers();
}

main();
