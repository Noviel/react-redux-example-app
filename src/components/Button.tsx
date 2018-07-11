import React from 'react';

import styles from './Button.module.css';

export interface IButtonsProps {
  size?: 'small' | 'large';
  flat?: boolean;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children?: any;
  style?: any;
  className?: string;
}

export const Button = ({
  size = 'large',
  flat = false,
  type = 'button',
  className = '',
  style = {},
  onClick,
  children,
}: IButtonsProps) => (
  <>
    <button
      className={`${styles.button} ${
        size === 'large' ? styles.large : styles.small
      } ${flat ? styles.flat : styles.regular} ${className}`}
      style={style}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  </>
);
