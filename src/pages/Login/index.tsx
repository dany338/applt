import { FC } from 'react';
import { IAuth, ILogin } from '../../entities/Auth';
import { Container } from './styled';
import ImageSign from '../../assets/images/image-sign.png';
import TextField from '../../components/TextField';
import TextButton from '../../components/TextButton';

export type FormEventHandler = React.FormEvent<HTMLFormElement | HTMLInputElement | HTMLSpanElement | HTMLDivElement>;

export interface ILoginProps {
  loading: boolean;
  logged: boolean;
  auth: IAuth;
  fecthAuth: (data: ILogin) => void;
  values: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  };
  errors: any;
  signUp: boolean;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  onChangeForm: (e: any) => void;
}

const Login: FC<ILoginProps> = ({
  loading,
  logged,
  auth,
  fecthAuth,
  values,
  errors,
  signUp,
  handleChange,
  handleSubmit,
  onChangeForm,
}) => {
  return (
    <Container image={ImageSign}>
      <div className="image" />
      <div className="form">
        <span className="title">Sign In</span>
        <span className="description">Simplify your companies in minutes.</span>
        <form onSubmit={handleSubmit} noValidate={true}>
          <TextField type="email" typeInput={'text'} name="email" placeholder="Your email" value={values.email} onChange={handleChange} errors={(errors.email && errors.email !== '') && (errors.email)} />
          <TextField type="password" typeInput={'text'} name="password" placeholder="Password" value={values.password} onChange={handleChange} errors={(errors.password && errors.password !== '') && (errors.password)} />
          {signUp && (
            <>
              <TextField type="text" typeInput={'text'} name="firstName" placeholder="First name" value={values?.firstName ?? ''} onChange={handleChange} errors={(errors.firstName && errors.firstName !== '') && (errors.firstName)} />
              <TextField type="text" typeInput={'text'} name="lastName" placeholder="Last name" value={values?.lastName ?? ''} onChange={handleChange} errors={(errors.lastName && errors.lastName !== '') && (errors.lastName)} />
            </>
          )}
          <div className="link">
            <span onClick={(e: FormEventHandler) => onChangeForm(e)}>{signUp ? 'Sign In' : 'Sign Up'}</span>
          </div>
          {loading ? <div><span>Loading...</span></div> : <TextButton width="18.438" text={!signUp ? 'Sign In' : 'Sign Up'} type={'submit'} />}
        </form>
      </div>
    </Container>
  );
}

export default Login;