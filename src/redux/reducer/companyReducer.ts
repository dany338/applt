import { ICompany } from '../../entities/Company';
import { COMPANY_GET_ALL, COMPANY_GET_ONE, COMPANY_CREATE, COMPANY_UPDATE, COMPANY_EXPORT_SEND_EMAIL } from '../types/company';

interface IActionProps {
  type: string;
  payload: any | unknown;
  exported: string;
}

interface IInitialState {
  companies: ICompany[] | [];
  company: ICompany | null;
  exported: string;
}

const initialState: IInitialState = {
  companies: [],
  company: null,
  exported: '',
};

export const companyReducer = (state = initialState, action: IActionProps) => {
  switch (action.type) {
    case COMPANY_GET_ALL:
      return {
        ...state,
        companies: action.payload,
      };
    case COMPANY_GET_ONE:
      return {
        ...state,
        company: action.payload,
      };
    case COMPANY_CREATE:
      return {
        ...state,
        company: action.payload,
        companies: [...state.companies, action.payload],
      };
    case COMPANY_UPDATE:
      return {
        ...state,
        company: action.payload,
        companies: state.companies.map((company) => (company.id === action.payload.id ? action.payload : company)),
      };
    case COMPANY_EXPORT_SEND_EMAIL:
      return {
        ...state,
        exported: action.payload,
      };
    default:
      return state;
  }
}