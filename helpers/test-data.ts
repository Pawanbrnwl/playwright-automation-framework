export interface UserCredentials {
  username: string;
  password: string;
}

export const validUser: UserCredentials = {
  username: process.env.USERNAME ?? 'Admin',
  password: process.env.PASSWORD ?? 'admin123'
};
