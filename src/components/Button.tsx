import React from 'react';

import styles from './Button.module.css';

export interface IButtonsProps {
  type?: string;
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button = ({
  children,
  onClick,
  type = 'button',
}: IButtonsProps) => (
  <>
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  </>
);
