import React from 'react';

import styles from './Button.module.css';

export interface IButtonsProps {
  name: string;
  children?: any;
}

export const Button = ({ name, children }: IButtonsProps) => (
  <>
    <button className={styles.button} type="submit">
      {children}
    </button>
  </>
);
