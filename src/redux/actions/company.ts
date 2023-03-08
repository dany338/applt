import { ICompany, ICompanyCreateUpdate, ICompanySendAndExport } from '../../entities/Company';
import { getCompaniesService, getCompanyService, createCompanyService, updateCompanyService, exportSendEmailCompanyService } from '../../services/company';
import { COMPANY_GET_ALL, COMPANY_GET_ONE, COMPANY_CREATE, COMPANY_UPDATE, COMPANY_EXPORT_SEND_EMAIL } from '../types/company';

export const getCompaniesAction = (userId: number | null) => async (dispatch: any) => {
  try {
    const response: ICompany[] | [] = await getCompaniesService(userId);
    dispatch({
      type: COMPANY_GET_ALL,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCompanyAction = (id: number) => async (dispatch: any) => {
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

export const createCompanyAction = (data: ICompanyCreateUpdate) => async (dispatch: any) => {
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

export const updateCompanyAction = (id: number, data: ICompanyCreateUpdate) => async (dispatch: any) => {
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

export const exportSendEmailCompanyAction = (data: ICompanySendAndExport) => async (dispatch: any) => {
  try {
    const response: string | null = await exportSendEmailCompanyService(data);
    dispatch({
      type: COMPANY_EXPORT_SEND_EMAIL,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
}