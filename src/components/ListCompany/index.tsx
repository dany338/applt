import React from 'react'
import Company from '../../entities/Company';
import RowCompany from '../RowCompany';
import {
  Container,
  Title,
  ContainerHeader,
  ContainerHeaderRow,
  ContainerHeaderCell,
} from './styled';

export interface ICompaniesProps {
  companies: Company[];
}

const ListCompany: React.FC<ICompaniesProps> = ({ companies }) => (
  <Container>
    <Title>Companies &amp;<span>{companies.length}</span></Title>
    <table>
      <ContainerHeader>
        <ContainerHeaderRow>
          <ContainerHeaderCell>Nit</ContainerHeaderCell>
          <ContainerHeaderCell>Name</ContainerHeaderCell>
          <ContainerHeaderCell>Address</ContainerHeaderCell>
          <ContainerHeaderCell>Phone</ContainerHeaderCell>
        </ContainerHeaderRow>
      </ContainerHeader>
      <tbody>
        {companies.length > 0 && companies.map((company : Company, index) => (
          <RowCompany key={`row-${company.id}`} {...company} index={index} />
        ))}
        {companies.length === 0 && (
          <tr className="center">
            <td colSpan={4}>No companies</td>
          </tr>
        )}
      </tbody>
    </table>
  </Container>
);

export default ListCompany;