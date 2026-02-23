import { User, ApiUser } from '../models/user-model';

export function mapApiUserToUser(apiUser: ApiUser): User {
  return {
    email: apiUser.email,
    sexo: apiUser.gender,
    nome: apiUser.first_name,
    sobrenome: apiUser.last_name,
    data_nascimento: apiUser.dob,
    celular: apiUser.cell,
    pais: apiUser.country,
  };
}
