import React from 'react';
import { StyledSpinner, StyledPath } from './StyledLoading';

interface LoadingProps {
  isLoading: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <StyledSpinner viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" style={{ display: isLoading ? 'block' : 'none' }}>
      <StyledPath offset={187} cx={33} cy={33} r={30} />
    </StyledSpinner>
  );
};
