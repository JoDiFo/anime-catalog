export class User implements EUser {
  id: number;
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
  image_url: string;

  constructor(
    id: number,
    username: string,
    registerDate: string,
    email: string,
    password: string,
    watched: string[],
    watching: string[],
    planToWatch: string[],
    stalled: string[],
    dropped: string[],
    token: string,
    image_url: string
  ) {
    this.id = id;
    this.username = username;
    this.registerDate = registerDate;
    this.email = email;
    this.password = password;
    this.watched = watched;
    this.watching = watching;
    this.planToWatch = planToWatch;
    this.stalled = stalled;
    this.dropped = dropped;
    this.token = token;
    this.image_url = image_url;
  }
}

export class UserLoginData implements EUserLoginData {
  isValid: boolean;
  id: number;
  username: string;
  registerDate: string;
  image_url: string;
  token: string;
  constructor(
    isValid: boolean,
    id: number,
    username: string,
    registerDate: string,
    image_url: string,
    token: string
  ) {
    this.isValid = isValid;
    this.id = id;
    this.username = username;
    this.registerDate = registerDate;
    this.image_url = image_url;
    this.token = token;
  }
}
