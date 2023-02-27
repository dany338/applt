export interface IClient {
  id: number;
  dni: string;
  firstName: string;
  lastName: string;
}

export interface ILines {
  id?: number | null;
  description: string;
  amount: number;
}

export interface ICompany {
  id?: number | null;
  nit: string;
  name: string;
  phone: string;
  address: string;
}

export interface ICompanyCreateUpdate {
  nit: string;
  name: string;
  phone: string;
  address: string;
}

class Company implements ICompany {
  id?: number | null;
  nit: string;
  name: string;
  phone: string;
  address: string;

  constructor(company: ICompany) {
    this.id = company.id;
    this.nit = company.nit;
    this.name = company.name;
    this.phone = company.phone;
    this.address = company.address;
  }
}

export default Company;