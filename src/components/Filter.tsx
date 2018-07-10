import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../store/actions';
import { filterSelector } from '../store/filter';

export interface IFilterProps {
  value: string;
  set?: any;
}

interface IFilterButtonProps {
  value: string;
  onClick?: any;
  active: boolean;
}

const FilterButton: React.SFC<IFilterButtonProps> = ({
  value,
  active = false,
  onClick,
  children,
}) => {
  const activeStyle = {
    color: 'red',
  };

  const inactiveStyle = {
    color: 'blue',
  };
  return (
    <span
      style={active ? activeStyle : inactiveStyle}
      onClick={e => onClick(value)}
    >
      {children}
    </span>
  );
};

export class UCFilter extends React.Component<IFilterProps, any> {
  public render() {
    const { value, set } = this.props;

    return (
      <>
        <FilterButton active={value === 'all'} value="all" onClick={set}>
          All
        </FilterButton>
        <FilterButton active={value === 'sent'} value="sent" onClick={set}>
          Sent
        </FilterButton>
        <FilterButton active={value === 'unsent'} value="unsent" onClick={set}>
          Unsent
        </FilterButton>
      </>
    );
  }
}

export const Filter = connect(
  state => ({
    value: filterSelector(state),
  }),
  { set: setFilter }
)(UCFilter);
