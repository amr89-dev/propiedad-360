export interface User {
  id: number;
  email: string;
  password: string;
}

export type UserId = Pick<User, "id">;
