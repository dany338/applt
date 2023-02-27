import api from './api';
import { API_COMPANY } from '../constants/backend';
import Company, { ICompany, ICompanyCreateUpdate } from '../entities/Company';

export const getCompaniesService = async (): Promise<ICompany[] | []> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.get(API_COMPANY);
    if (response.status === 200) {
      resolve(response.data.map((invoice: ICompany) => new Company(invoice)));
    }
  } catch (err) {
    reject(err);
  }
});

export const getCompanyService = async (id: number): Promise<ICompany | null> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.get(`${API_COMPANY}/${id}`);
    if (response.status === 200) {
      resolve(new Company(response.data));
    }
  } catch (err) {
    reject(err);
  }
});

export const createCompanyService = async (data: ICompanyCreateUpdate): Promise<ICompany | null> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(API_COMPANY, data);
    if (response.status === 201) {
      resolve(new Company(response.data));
    }
  } catch (err) {
    reject(err);
  }
});

export const updateCompanyService = async (id: number, data: ICompanyCreateUpdate): Promise<ICompany | null> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.patch(`${API_COMPANY}/${id}`, data);
    if (response.status === 200) {
      resolve(new Company(response.data));
    }
  } catch (err) {
    reject(err);
  }
});