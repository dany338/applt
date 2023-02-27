export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
}

export interface IAuth {
  user: IUser;
  token: string;
}

class Auth implements IAuth {
  user: IUser;
  token: string;

  constructor(auth: IAuth) {
    this.user = auth.user;
    this.token = auth.token;
  }
}

export default Auth;