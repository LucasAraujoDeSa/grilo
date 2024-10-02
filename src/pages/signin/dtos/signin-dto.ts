export type SigninDTO = {
  email: string;
  password: string;
};

export type SigninOutputDTO = {
  id: string;
  name: string;
  accessToken: string;
  refreshToken: string;
};
