
import styled, { keyframes } from 'styled-components';


const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const colors = keyframes`
	0% { stroke: #fff; }
	25% { stroke: #7C05F2; }
	50% { stroke: #fff; }
	75% { stroke: #7C05F2; }
  100% { stroke: #fff; }
`;

const dash = (offset: number) => keyframes`
  0% { stroke-dashoffset: ${offset}; }
  50% {
    stroke-dashoffset: ${offset / 4};
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${offset};
    transform:rotate(360deg);
  }
`;

// Estilizando o componente
export const StyledSpinner = styled.svg`
  width: 20px;
  height: 20px;
  animation: ${rotator} 4s linear infinite;
`;

export const StyledPath = styled.circle<{ offset: number }>`
  fill: none;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: ${({ offset }) => `${offset}`};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash(187)} 4s ease-in-out infinite, ${colors} 16s ease-in-out infinite;
`;
