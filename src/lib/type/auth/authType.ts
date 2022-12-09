export interface LoginApiProps {
  username: string;
  password: string;
}

export interface JwtType {
  access_token: string;
  refresh_token: string;
  role: UserRole;
}

export enum UserRole {
  doctor = 'doctor',
  client = 'client',
}
