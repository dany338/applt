import api from './api';
import { API_USER } from '../constants/backend';
import User, { IUserRegister } from '../entities/User';

export const userRegisterService = async (data: IUserRegister): Promise<User | unknown> => new Promise( async (resolve, reject) => {
  try {
    const dataRole = { ...data, role: 'external' }
    const response = await api.post(API_USER, dataRole);
    if (response.status === 201) {
      resolve(new User(response.data));
    }
  } catch (err) {
    reject(err);
  }
});