import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../redux/actions/auth';
import { userRegisterAction } from '../redux/actions/user';
import { ILogin } from '../entities/Auth';
import { IUserRegister } from '../entities/User';
import useValidation from './../hooks/useValidation';
import { validateAuth, validateSignUp } from '../utils/validations';

const initialState = {
  email: '',
  password: '',
};

const initialStateSignUp = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const useAuth = () => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ signUp, setSignUp ] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { auth: { logged, auth } }: any = useSelector((state) => state);

  const onChangeForm = () => {
    setSignUp(!signUp);
  }

  const fecthAuth = async () => {
    const data: ILogin = values;
    setLoading(true);
    await dispatch<any | unknown>(loginAction(data));
    setLoading(false);
  };

  const fecthUserRegister = async () => {
    const data: IUserRegister = values;
    const dataLogin: ILogin = { email: data.email, password: data.password };
    setLoading(true);
    await dispatch<any | unknown>(userRegisterAction(data));
    await dispatch<any | unknown>(loginAction(dataLogin));
    setLoading(false);
  }

  const fecthLogout = async () => {
    setLoading(true);
    await dispatch<any | unknown>(logoutAction());
    setLoading(false);
  };

  const [ values, errors, handleChange, handleSubmit ] = useValidation(!signUp ? initialState : initialStateSignUp, !signUp ? validateAuth : validateSignUp, !signUp ? fecthAuth : fecthUserRegister);

  return { loading, logged, auth, fecthAuth, fecthLogout, values, errors, signUp, handleChange, handleSubmit, onChangeForm };
}

export default useAuth;