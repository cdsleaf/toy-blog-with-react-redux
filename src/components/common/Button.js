import React from 'react';
import styled from 'styled-components';
import OpenColor from 'open-color';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${OpenColor.gray[8]};
  &:hover {
    background: ${OpenColor.gray[6]};
  }
`;

const Button = props => <StyledButton {...props} />;

export default Button;
