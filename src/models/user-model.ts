export interface User {
  email: string;
  sexo: string;
  nome: string;
  sobrenome: string;
  data_nascimento: string;
  celular: string;
  pais: string;
}

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
