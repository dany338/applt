export interface ICompany {
  id?: number | null;
  nit: string;
  name: string;
  address: string;
  phone: string;
}

export interface ICompanyCreateUpdate {
  nit: string;
  name: string;
  address: string;
  phone: string;
}

class Company implements ICompany {
  id?: number | null;
  nit: string;
  name: string;
  address: string;
  phone: string;

  constructor(company: ICompany) {
    this.id = company.id;
    this.nit = company.nit;
    this.name = company.name;
    this.address = company.address;
    this.phone = company.phone;
  }
}

export default Company;