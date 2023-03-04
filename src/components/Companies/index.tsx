import React from 'react'
import {
  Container,
  RootTitle,
  RootTitleContent,
  RootTitleText,
  RootCardContent,
  RootCardGrid,
  RootCardGridItem,
} from './styled';

import FormCompany from '../FormCompany';
import ListCompany from '../ListCompany';
import Company from '../../entities/Company';
import TextButton from '../TextButton';

export interface ICompaniesProps {
  loading: boolean;
  values: {
    nit: string;
    name: string;
    address: string;
    phone: string;
  };
  errors: any;
  companies: Company[];
  exported: string;
  isHome?: boolean;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  handleExportSendEmail: (e: any) => void;
}

const Companies: React.FC<ICompaniesProps> = ({
  loading,
  values,
  errors,
  companies,
  exported,
  isHome = false,
  handleChange,
  handleSubmit,
  handleExportSendEmail,
}) => (
  <Container>
    {!isHome && (
      <>
        <RootTitle>
          <RootTitleContent>
            <RootTitleText>
              Companies
            </RootTitleText>
          </RootTitleContent>
        </RootTitle>
        <RootCardContent>
          <FormCompany
            loading={loading}
            values={values}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </RootCardContent>
      </>
    )}
    <RootCardGrid>
      {!isHome && (
        <RootCardGridItem>
          {loading ? <div><span>Loading...</span></div> : <TextButton width="18.438" text={'Export pdf & Send email'} type={'button'} onClick={(e: any) => handleExportSendEmail(e)} />}
          {exported !== '' && (<span className="exported">{exported}</span>)}
        </RootCardGridItem>
      )}
      <RootCardGridItem>
        <ListCompany companies={companies} />
      </RootCardGridItem>
    </RootCardGrid>
  </Container>
);

export default Companies;