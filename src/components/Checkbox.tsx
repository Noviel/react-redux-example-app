import React from 'react';

import styles from './Checkbox.module.css';

export interface ICheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export const Checkbox: React.SFC<ICheckboxProps> = props => (
  <label className={styles.container}>
    <input type="checkbox" onChange={props.onChange} checked={props.checked} />
    <span className={styles.checkmark} />
  </label>
);
