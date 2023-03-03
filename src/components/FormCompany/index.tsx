import React from 'react'
import Company from '../../entities/Company';
import TextButton from '../TextButton';
import TextField from '../TextField';
import {
  RootCardContentContainer,
  RootCardContentContainerItem,
} from './styled';

export interface IFormCompanyProps {
  loading: boolean;
  values: {
    nit: string;
    name: string;
    address: string;
    phone: string;
  };
  errors: any;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const FormCompany: React.FC<IFormCompanyProps> = ({
  loading,
  values,
  errors,
  handleChange,
  handleSubmit,
}) => (
  <RootCardContentContainer>
    <form onSubmit={handleSubmit} noValidate={true}>
      <RootCardContentContainerItem>
        <TextField type="text" typeInput={'text'} name="nit" placeholder="Your nit" value={values.nit} onChange={handleChange} errors={(errors.nit && errors.nit !== '') && (errors.nit)} />
      </RootCardContentContainerItem>
      <RootCardContentContainerItem>
        <TextField type="text" typeInput={'text'} name="name" placeholder="Your name" value={values.name} onChange={handleChange} errors={(errors.name && errors.name !== '') && (errors.name)} />
      </RootCardContentContainerItem>
      <RootCardContentContainerItem>
        <TextField type="text" typeInput={'text'} name="address" placeholder="Your address" value={values.address} onChange={handleChange} errors={(errors.address && errors.address !== '') && (errors.address)} />
      </RootCardContentContainerItem>
      <RootCardContentContainerItem>
        <TextField type="text" typeInput={'text'} name="phone" placeholder="Your phone" value={values.phone} onChange={handleChange} errors={(errors.phone && errors.phone !== '') && (errors.phone)} />
      </RootCardContentContainerItem>
      <hr />
      <RootCardContentContainerItem>
        {loading ? <div><span>Loading...</span></div> : <TextButton width="18.438" text={'Save'} type={'submit'} />}
      </RootCardContentContainerItem>
    </form>
  </RootCardContentContainer>
);

export default FormCompany;