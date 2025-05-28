import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = styled.button<ButtonProps>`
  background: ${props => {
    switch (props.variant) {
      case 'secondary':
        return '#e5e7eb';
      case 'danger':
        return '#ef4444';
      default:
        return '#3b82f6';
    }
  }};
  color: ${props => props.variant === 'secondary' ? '#1f2937' : 'white'};
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => {
      switch (props.variant) {
        case 'secondary':
          return '#d1d5db';
        case 'danger':
          return '#dc2626';
        default:
          return '#2563eb';
      }
    }};
  }

  &:disabled {
    background: #93c5fd;
    cursor: not-allowed;
    opacity: 0.7;
  }
`; 