import { ICompany } from '../../entities/Company';
import { COMPANY_GET_ALL, COMPANY_GET_ONE, COMPANY_CREATE, COMPANY_UPDATE } from '../types/company';

interface IActionProps {
  type: string;
  payload: any | unknown;
}

interface IInitialState {
  companies: ICompany[] | [];
  company: ICompany | null;
}

const initialState: IInitialState = {
  companies: [],
  company: null,
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
    default:
      return state;
  }
}