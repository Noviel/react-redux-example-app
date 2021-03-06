import React from 'react';

import styles from './Input.module.css';

export interface IInputProps {
  placeholder: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  style?: object;
}

export const Input = ({
  placeholder,
  name,
  label,
  value,
  onChange,
  style = {},
}: IInputProps) => (
  <div style={style}>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <input
      className={styles.input}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);
