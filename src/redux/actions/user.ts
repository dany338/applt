import User, { IUserRegister } from '../../entities/User';
import { userRegisterService } from '../../services/user';
import { USER_REGISTER } from '../types/user';

export const userRegisterAction = (data: IUserRegister) => async (dispatch: any) => {
  try {
    const response: User | unknown = await userRegisterService(data);
    dispatch({
      type: USER_REGISTER,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};