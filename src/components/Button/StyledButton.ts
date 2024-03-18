import styled, { css } from 'styled-components';
import { Colors } from '../../styles/Colors';
import { Tokens } from '../../styles/Tokens';

interface StyledButtonProps {
  variant: 'primary' | 'secondary' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Inter';
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.14px;
  display: inline-flex;
  align-items: center;
  gap: ${Tokens.spacing.spacing4};
  border-radius: ${Tokens.borderRadius.bRadius8};
  padding: ${Tokens.spacing.spacing8} ${Tokens.spacing.spacing16};
 
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: ${Colors.ctaButton};
          background: ${Colors.gradientPrimary};
          &:hover {
            box-shadow: 1px 1px 4px 0px rgba(54, 0, 117, 0.20) inset, 0px 8px 16px 0px rgba(54, 0, 117, 0.20);
          }
          &:disabled {
            box-shadow: 1px 1px 4px 0px rgba(61, 61, 61, 0.15) inset;
            color: ${Colors.ctaButtonDisabled};
            background: ${Colors.gradientDisabled};
          }
        `;
      case 'secondary':
        return css`
          color: ${Colors.ghostButtonDefault};
          background: ${Colors.bgWhite};
          outline: ${Tokens.border.bInside1} ${Colors.ghostButtonDefault};
          &:hover {
          background: ${Colors.ctaButton};
          }
          &:disabled {
            outline: ${Tokens.border.bInside1} ${Colors.buttonDisabled}; 
            background:${Colors.buttonSecondaryDisabled}; 
            color: ${Colors.ctaButtonDisabled};
          }
        `;
      default:
        return null;
    }
  }}

.icon {
  width: 20px;
  height: 20px;
  path {
    fill: ${({ variant, disabled }) =>
      disabled
        ? Colors.ctaButtonDisabled
        : variant === 'primary'
        ? Colors.ctaButton
        : Colors.ghostButtonDefault};
  }
}

  /* ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 12px;
          padding: 10px 16px;
        `;
      case 'medium':
        return css`
          font-size: 14px;
          padding: 11px 20px;
        `;
      case 'large':
        return css`
          font-size: 16px;
          padding: 12px 24px;
        `;
      default:
        return null;
    }
  }} */


`;
