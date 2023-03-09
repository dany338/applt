import User from '../../entities/User';
import { USER_REGISTER } from '../types/user';

interface IActionProps {
  type: string;
  payload: any | unknown;
}

interface IInitialState {
  user: User | null;
}

const initialState: IInitialState = {
  user: null,
};

export const userReducer = (state = initialState, action: IActionProps) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}