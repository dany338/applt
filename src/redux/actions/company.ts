import { ICompany, ICompanyCreateUpdate } from '../../entities/Company';
import { getCompaniesService, getCompanyService, createCompanyService, updateCompanyService } from '../../services/company';
import { COMPANY_GET_ALL, COMPANY_GET_ONE, COMPANY_CREATE, COMPANY_UPDATE } from '../types/company';

export const getInvoicesAction = () => async (dispatch: any) => {
  try {
    const response: ICompany[] | [] = await getCompaniesService();
    dispatch({
      type: COMPANY_GET_ALL,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getInvoiceAction = (id: number) => async (dispatch: any) => {
  try {
    const response: ICompany | null = await getCompanyService(id);
    dispatch({
      type: COMPANY_GET_ONE,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createInvoiceAction = (data: ICompanyCreateUpdate) => async (dispatch: any) => {
  try {
    const response: ICompany | null = await createCompanyService(data);
    dispatch({
      type: COMPANY_CREATE,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateInvoiceAction = (id: number, data: ICompanyCreateUpdate) => async (dispatch: any) => {
  try {
    const response: ICompany | null = await updateCompanyService(id, data);
    dispatch({
      type: COMPANY_UPDATE,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};