import React from 'react';
import { connect } from 'react-redux';

import { Button } from '../UI/Button';

import { setFilter } from '../../store/actions';
import { filterSelector } from '../../store/filter';
import { IAppState } from '../../store/store';

import styles from './Filter.module.css';

interface IFilterButtonProps {
  active: boolean;
  value: string;
  apply: (value: string) => void;
}

const FilterButton: React.SFC<IFilterButtonProps> = ({
  active = false,
  value,
  apply,
  children,
}) => (
  <>
    <Button
      flat
      className={active ? styles.active : ''}
      onClick={e => apply(value)}
    >
      {children}
      {active && <div className={styles.underline} />}
    </Button>
  </>
);

export interface IFilterProps {
  value: string;
  set: (value: string) => void;
}

export class BaseFilter extends React.Component<IFilterProps, {}> {
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
        <FilterButton active={value === 'all'} value="all" apply={set}>
          Show all
        </FilterButton>
        <FilterButton active={value === 'sent'} value="sent" apply={set}>
          Show sent
        </FilterButton>
        <FilterButton active={value === 'unsent'} value="unsent" apply={set}>
          Show unsent
        </FilterButton>
      </div>
    );
  }
}

export const Filter = connect(
  (state: IAppState) => ({
    value: filterSelector(state),
  }),
  { set: setFilter }
)(BaseFilter as any);
