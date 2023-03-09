export interface IUserRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUser {
  id: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  recoveryToken: string | null;
}

class User implements IUser {
  id: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  recoveryToken: string | null;

  constructor(user: IUser) {
    this.id = user.id;
    this.email = user.email;
    this.role = user.role;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.createdAt = user.createdAt;
    this.recoveryToken = user.recoveryToken;
  }
}

export default User;