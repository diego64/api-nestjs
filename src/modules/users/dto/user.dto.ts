export type CreateUserDTO = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type UserCreatedDTO = {
  id: string;
  createdAt: Date;
} & CreateUserDTO;

export type UsernameAndEmail = {
  email: string;
  username: string;
};
