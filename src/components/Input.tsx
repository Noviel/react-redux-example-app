import React from 'react';

import styles from './Input.module.css';

export interface IInputProps {
  placeholder: string;
  name: string;
  label: string;
}

export const Input = ({ placeholder, name, label }: IInputProps) => (
  <>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <input name={name} placeholder={placeholder} />
  </>
);
