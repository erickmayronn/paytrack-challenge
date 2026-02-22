import { User } from '../types/user';

export interface ApiUser {
  id: string;
  username: string;
  password: string;
  email: string;
  name: string;
  first_name: string;
  last_name: string;
  full_name: string;
  prefix: string;
  suffix: string;
  phone: string;
  cell: string;
  address: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  dob: string;
  age: number;
  gender: string;
  job: string;
  company: string;
  company_email: string;
  ssn: string;
  credit_card: string;
  credit_card_provider: string;
  iban: string;
  ipv4: string;
  ipv6: string;
  mac_address: string;
  user_agent: string;
  url: string;
  domain: string;
  picture: string;
  avatar: string;
  uuid: string;
  md5: string;
  sha1: string;
  sha256: string;
  locale: string;
}

export function mapApiUserToUser(apiUser: ApiUser): User {
  return {
    email: apiUser.email,
    gender: apiUser.gender,
    first_name: apiUser.first_name,
    last_name: apiUser.last_name,
    dob: apiUser.dob,
    cell: apiUser.cell,
    country: apiUser.country,
  };
}
