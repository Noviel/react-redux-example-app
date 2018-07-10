import React from 'react';

import styles from './Button.module.css';

export interface IButtonsProps {
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button = ({ children, onClick }: IButtonsProps) => (
  <>
    <button className={styles.button} type="submit" onClick={onClick}>
      {children}
    </button>
  </>
);
