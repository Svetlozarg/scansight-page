export type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  points: number;
  createdAt: Date;
  updatedAt: Date;
};

export type SignInSnippet = {
  success: boolean;
  data: User;
};
