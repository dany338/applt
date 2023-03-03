import React from 'react'
import {
  Container,
  ContainerCell,
} from './styled';

export interface ICompaniesProps {
  id?: number | null;
  userId: number;
  nit: string;
  name: string;
  address: string;
  phone: string;
  index: number;
}

const RowCompany: React.FC<ICompaniesProps> = ({
  nit,
  name,
  address,
  phone,
  index,
}) => (
  <Container index={index}>
    <ContainerCell>{nit}</ContainerCell>
    <ContainerCell>{name}</ContainerCell>
    <ContainerCell>{address}</ContainerCell>
    <ContainerCell>{phone}</ContainerCell>
  </Container>
);

export default RowCompany;