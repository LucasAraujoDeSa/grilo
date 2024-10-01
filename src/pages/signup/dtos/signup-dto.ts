export type SignupDTO = {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
};

export type SignupOutputDTO = {
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
};
