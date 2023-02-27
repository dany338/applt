import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEffectOnce from './useEffectOnce';
import { getCompaniesAction, getCompanyAction, createCompanyAction, updateCompanyAction } from '../redux/actions/company';
import { ICompanyCreateUpdate } from '../entities/Company';

const useCompany = () => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { company: { companies, company } }: any = useSelector((state) => state);

  const fecthCompanies = async () => {
    setLoading(true);
    await dispatch<any | unknown>(getCompaniesAction());
    setLoading(false);
  };

  const fecthCompany = async (id: number) => {
    setLoading(true);
    await dispatch<any | unknown>(getCompanyAction(id));
    setLoading(false);
  };

  const fecthCreateCompany = async (data: ICompanyCreateUpdate) => {
    setLoading(true);
    await dispatch<any | unknown>(createCompanyAction(data));
    setLoading(false);
  };

  const fecthUpdateCompany = async (id: number, data: ICompanyCreateUpdate) => {
    setLoading(true);
    await dispatch<any | unknown>(updateCompanyAction(id, data));
    setLoading(false);
  };

  useEffectOnce(() => {
    fecthCompanies();
    return () => console.log('unmounting...');
  });

  return { loading, companies, company, fecthCompany, fecthCreateCompany, fecthUpdateCompany };
}

export default useCompany;