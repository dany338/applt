import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEffectOnce from './useEffectOnce';
import { getCompaniesAction, exportSendEmailCompanyAction, createCompanyAction, updateCompanyAction } from '../redux/actions/company';
import { ICompanyCreateUpdate } from '../entities/Company';
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
  const { company: { companies, company, exported }, auth : { auth : { user : { id : userId } } } }: any = useSelector((state) => state);

  const fecthCompanies = async () => {
    setLoading(true);
    await dispatch<any | unknown>(getCompaniesAction(userId));
    setLoading(false);
  };

  const fecthCreateUpdateCompany = async () => {
    const data: ICompanyCreateUpdate = values;
    const newData = { ...data, userId }
    setLoading(true);
    await dispatch<any | unknown>(data?.id ? updateCompanyAction(data?.id, newData) : createCompanyAction(newData));
    setLoading(false);
  };

  const handleExportSendEmail = async () => {
    setLoading(true);
    await dispatch<any | unknown>(exportSendEmailCompanyAction(userId));
    setLoading(false);
  };

  useEffectOnce(() => {
    fecthCompanies();
    return () => console.log('unmounting...');
  });

  const [ values, errors, handleChange, handleSubmit ] = useValidation(initialState, validateCompany, fecthCreateUpdateCompany);

  return { loading, companies, company, values, errors, exported, handleChange, handleSubmit, handleExportSendEmail };
}

export default useCompany;