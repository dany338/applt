import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';

export interface ITextFieldProps {
  type: string | any;
  typeInput: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.FormEvent<HTMLFormElement | HTMLInputElement | HTMLSpanElement>) => void;
  errors?: string | null;
  icon?: string | null;
  rows?: string | number | any;
  className?: string | null;
};

const TextField: React.FC<ITextFieldProps> = ({ type, typeInput, name, placeholder, value, onChange, errors = null, icon = null, rows = '4', className = null }) => {
  const [changeType, setChangeType] = useState(type);
  const handleChangeType = () => setChangeType(changeType === 'password' ? 'text' : 'password');
  return (
    <Container className={className ? className : ''}>
      <Wrapper className={className ? className : ''}>
        <SearchBox type={changeType}>
          {typeInput === 'textarea' ? (
            <textarea rows={rows} name={name} value={value} placeholder={placeholder} onChange={onChange} />
          ) : (
            <>
              <input type={changeType} name={name} value={value} placeholder={placeholder} onChange={onChange} />
              {(type === 'password' ) && (
                <div className="icons" onClick={() => handleChangeType() }>
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M0.783691 7C0.783691 7 3.72568 1 8.87415 1C14.0226 1 16.9646 7 16.9646 7C16.9646 7 14.0226 13 8.87415 13C3.72568 13 0.783691 7 0.783691 7Z" stroke="#D2DDEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.87421 9.25C10.0928 9.25 11.0807 8.24264 11.0807 7C11.0807 5.75736 10.0928 4.75 8.87421 4.75C7.6556 4.75 6.66772 5.75736 6.66772 7C6.66772 8.24264 7.6556 9.25 8.87421 9.25Z" stroke="#D2DDEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </>
          )}
          {errors && (
            <div className="container-errors">
              <span className="errors">{errors}</span>
            </div>
          )}
        </SearchBox>
      </Wrapper>
    </Container>
  );
};

export default TextField;
