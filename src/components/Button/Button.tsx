import React from 'react';
import { StyledButton } from './StyledButton';
import { DefaultIconButton } from '../../assets/defaultIconButton';


interface ButtonProps {
  variant?: 'primary' | 'secondary';
  // backgroundColor?: string;
  // size?: 'small' | 'medium' | 'large';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  // size = 'medium',
  label,
  disabled = false,
  icon = <DefaultIconButton />,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      disabled={disabled}
      // size={size}
      {...props}
    >
      <span className="icon">{icon}</span>
      <div>{label}</div>
    </StyledButton>
  );
};
