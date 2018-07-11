import React from 'react';
import { connect } from 'react-redux';

import { deleteUsers } from '../../store/actions';
import { checkedSelector } from '../../store/checked';
import { IAppState } from '../../store/store';
import { Button } from '../UI/Button';

interface IDeleteButtonProps {
  deleteUsers: (ids: string[]) => void;
  checked: string[];
}

export const BaseDeleteButton: React.SFC<IDeleteButtonProps> = props => (
  <Button flat onClick={e => props.deleteUsers(props.checked)}>
    {props.children}
  </Button>
);

export const DeleteButton = connect(
  (state: IAppState) => ({
    checked: checkedSelector(state),
  }),
  { deleteUsers }
)(BaseDeleteButton);
