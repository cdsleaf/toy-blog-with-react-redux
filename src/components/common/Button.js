import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import OpenColor from 'open-color';

const buttonStyle = styled.button`
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

  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0%.75rem;
      width: 100%;
      font-size: 1.125rem;
    `
  }

  ${props =>
    props.cyan &&
    css`
      background: ${OpenColor.cyan[5]};
      &:hover {
        background: ${OpenColor.cyan[4]};
      }
    `
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return props.to
    ? <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
    : <StyledButton {...props} />
};

export default Button;
