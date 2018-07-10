import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { Dispatch } from 'redux';

import 'react-table/react-table.css';

import { toggleSelected } from '../store/actions';
import { checkedSelector } from '../store/checked';
import { filterSelector, usersSelector } from '../store/users';

import { Button } from './Button';
import { Checkbox } from './Checkbox';

export interface ITableProps {
  id?: string;
  users?: any;
  toggle?: any;
  checked: string[];
}

export interface ITableState {
  data: any;
}

export class UCTable extends React.Component<ITableProps, ITableState> {
  public render() {
    const toggle = this.props.toggle!;
    const columns = [
      {
        Cell: (row: any) => (
          <Checkbox
            onChange={e => toggle(row.original.id)}
            checked={this.props.checked.includes(row.original.id)}
          />
        ),
        Header: '',
        accessor: undefined,
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Cell: (row: any) => (
          <Button name="send" onClick={e => console.log(e, row)}>
            Send
          </Button>
        ),
        Header: 'Action',
        accessor: undefined,
      },
    ];

    // tslint:disable-next-line
    console.log('render with', this.props);
    return (
      <ReactTable
        data={this.props.users}
        columns={columns}
        showPagination={false}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  users: usersSelector(state),
  filter: filterSelector(state),
  checked: checkedSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: (id: string) => dispatch(toggleSelected(id)),
});

export const Table = connect(
  mapStateToProps,
  mapDispatchToProps
)(UCTable);
