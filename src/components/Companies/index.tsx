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
import TextField from '../TextField';

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
  email?: string;
  from?: string;
  onChangeEmail?: (e: any) => void | null;
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
  email = '',
  from = '',
  onChangeEmail = () => ({}),
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
        loading ? <div><span>Loading...</span></div> : (
          <RootCardGridItem>
            <TextButton width="18.438" text={'Export pdf & Send email'} type={'button'} onClick={(e: any) => handleExportSendEmail(e)} />
            <TextField className="centered" type="text" typeInput={'text'} name="email" placeholder="Your email" value={email} onChange={onChangeEmail} />
            <div className="centered">
              <select className="centered" name="from" value={from} onChange={onChangeEmail} style={{ width: 'auto'}}>
                <option value="">Select a file</option>
                <option value="gmail">send email for gmail</option>
                <option value="aws">send email for aws specific confirmed recipients</option>
              </select>
            </div>
            {exported !== '' && (<span className="exported">{exported}</span>)}
          </RootCardGridItem>
        )
      )}
      <RootCardGridItem>
        <ListCompany companies={companies} />
      </RootCardGridItem>
    </RootCardGrid>
  </Container>
);

export default Companies;