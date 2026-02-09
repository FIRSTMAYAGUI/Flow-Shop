export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = {
  fullname: string;
  email: string;
  password: string;
  password_confirmation: string;
};