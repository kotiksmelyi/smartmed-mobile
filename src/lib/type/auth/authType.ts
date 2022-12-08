export interface LoginApiProps {
  username: string;
  password: string;
}

export interface JwtType {
  access: string;
  refresh: string;
  role: UserRole;
}

export enum UserRole {
  doctor = 'doctor',
  client = 'client',
}
