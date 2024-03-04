export interface ID {
  id: string;
}

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
}
