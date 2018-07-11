import React from 'react';
import { connect } from 'react-redux';

import { deleteUsers } from '../store/actions';
import { checkedSelector } from '../store/checked';
import { Button } from './Button';

interface IDeleteButtonProps {
  dummy?: any;
  deleteUsers?: any;
  checked: string[];
}

export const UCDeleteButton: React.SFC<IDeleteButtonProps> = props => (
  <Button flat onClick={e => props.deleteUsers(props.checked)}>
    {props.children}
  </Button>
);

export const DeleteButton = connect(
  state => ({
    checked: checkedSelector(state),
  }),
  { deleteUsers }
)(UCDeleteButton);
