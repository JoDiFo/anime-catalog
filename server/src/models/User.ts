export class User implements EUser {
  id: number;
  username: string;
  registerDate: string;
  email: string;
  password: string;
  watched: string[];
  watching: string[];
  planned: string[];
  stalled: string[];
  dropped: string[];
  token: string;
  imageUrl: string;

  constructor(
    id: number,
    username: string,
    registerDate: string,
    email: string,
    password: string,
    watched: string[],
    watching: string[],
    planned: string[],
    stalled: string[],
    dropped: string[],
    token: string,
    imageUrl: string
  ) {
    this.id = id;
    this.username = username;
    this.registerDate = registerDate;
    this.email = email;
    this.password = password;
    this.watched = watched;
    this.watching = watching;
    this.planned = planned;
    this.stalled = stalled;
    this.dropped = dropped;
    this.token = token;
    this.imageUrl = imageUrl;
  }
}

export class UserLoginData implements EUserLoginData {
  isValid: boolean;
  id: number;
  username: string;
  registerDate: string;
  imageUrl: string;
  token: string;
  
  constructor(
    isValid: boolean,
    id: number,
    username: string,
    registerDate: string,
    imageUrl: string,
    token: string
  ) {
    this.isValid = isValid;
    this.id = id;
    this.username = username;
    this.registerDate = registerDate;
    this.imageUrl = imageUrl;
    this.token = token;
  }
}
