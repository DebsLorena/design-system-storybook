import React from 'react';
import { StyledButton } from './StyledButton';
import { DefaultIconButton } from '../../assets/defaultIconButton';
import { Loading } from '../Loading/Loading';


interface ButtonProps {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  label,
  disabled = false,
  isLoading = false,
  icon = <DefaultIconButton />,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      disabled={disabled || isLoading}
      {...props}
    >
      <span className="icon">{icon}</span>
      <div>{label}</div>
      {isLoading ? (<Loading isLoading={true} />) : null}
    </StyledButton>
  );
};
