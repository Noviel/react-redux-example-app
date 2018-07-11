import React from 'react';
import { connect } from 'react-redux';

import { Button } from '../UI/Button';

import { setFilter } from '../../store/actions';
import { filterSelector } from '../../store/filter';

import styles from './Filter.module.css';

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
    border: '1px solid red',
  };

  const inactiveStyle = {};

  return (
    <>
      <Button
        flat
        className={active ? styles.active : ''}
        onClick={e => onClick(value)}
      >
        {children}
        {active && <div className={styles.underline} />}
      </Button>
    </>
  );
};

export class UCFilter extends React.Component<IFilterProps, any> {
  public render() {
    const { value, set } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '300px',
        }}
      >
        <FilterButton active={value === 'all'} value="all" onClick={set}>
          Show all
        </FilterButton>
        <FilterButton active={value === 'sent'} value="sent" onClick={set}>
          Show sent
        </FilterButton>
        <FilterButton active={value === 'unsent'} value="unsent" onClick={set}>
          Show unsent
        </FilterButton>
      </div>
    );
  }
}

export const Filter = connect(
  state => ({
    value: filterSelector(state),
  }),
  { set: setFilter }
)(UCFilter);
