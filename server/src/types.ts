export interface RegisterData {
  input: IUserData;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface IUserData {
  username: string;
  registerDate: string;
  email: string;
  password: string;
  watched: string[];
  watching: string[];
  "plan-to-watch": string[];
  stalled: string[];
  dropped: string[];
  token: string;
}

export interface IUser {
  _id: string;
  username: string;
  registerDate: string;
  email: string;
  password: string;
  watched: string[];
  watching: string[];
  planToWatch: string[];
  stalled: string[];
  dropped: string[];
  token: string;
}

export interface IValidation {
  isValid: boolean;
  _userId: string;
  username: string;
  registerDate: string;
  imageUrl: string;
}
