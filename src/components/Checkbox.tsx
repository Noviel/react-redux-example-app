import React from 'react';

export interface ICheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export const Checkbox: React.SFC<ICheckboxProps> = props => (
  <input type="checkbox" onChange={props.onChange} checked={props.checked} />
);
