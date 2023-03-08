import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEffectOnce from './useEffectOnce';
import { getCompaniesAction, exportSendEmailCompanyAction, createCompanyAction, updateCompanyAction } from '../redux/actions/company';
import { ICompanyCreateUpdate, ICompanySendAndExport } from '../entities/Company';
import useValidation from './../hooks/useValidation';
import { validateCompany } from '../utils/validations';

const initialState = {
  userId: null,
  nit: '',
  name: '',
  address: '',
  phone: '',
};

const useCompany = () => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { company: { companies, company, exported }, auth : { auth } }: any = useSelector((state) => state);
  const [ email, setEmail ] = useState<string>(auth?.user?.email || '');
  const [ from, setFrom ] = useState<string>('');

  const onChangeEmail = (e: any) => {
    const { value, name } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'from') setFrom(value);
  }

  const fecthCompanies = async () => {
    setLoading(true);
    await dispatch<any | unknown>(getCompaniesAction(auth?.user?.id));
    setLoading(false);
  };

  const fecthCreateUpdateCompany = async () => {
    const data: ICompanyCreateUpdate = values;
    const newData = { ...data, userId: auth?.user?.id }
    setLoading(true);
    await dispatch<any | unknown>(data?.id ? updateCompanyAction(data?.id, newData) : createCompanyAction(newData));
    setLoading(false);
  };

  const handleExportSendEmail = async () => {
    const data: ICompanySendAndExport = { userId: auth?.user?.id, email, from };
    setLoading(true);
    if (email.trim() !== '' && from.trim() !== '') {
      await dispatch<any | unknown>(exportSendEmailCompanyAction(data));
    }
    setLoading(false);
  };

  useEffectOnce(() => {
    fecthCompanies();
    return () => console.log('unmounting...');
  });

  const [ values, errors, handleChange, handleSubmit ] = useValidation(initialState, validateCompany, fecthCreateUpdateCompany);

  return { loading, companies, company, values, errors, exported, email, from, handleChange, handleSubmit, handleExportSendEmail, onChangeEmail };
}

export default useCompany;