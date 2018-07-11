import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { Dispatch } from 'redux';

import 'react-table/react-table.css';

import { send, toggleSelected } from '../store/actions';
import { checkedSelector } from '../store/checked';
import { usersByIdSelector, visibleUsers } from '../store/users';

import { Button } from './Button';
import { Checkbox } from './Checkbox';

export interface ITableProps {
  id?: string;
  users?: any;
  shown?: any;
  toggle?: any;
  send?: any;
  checked: string[];
}



export class UCTable extends React.Component<ITableProps> {
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
        width: 40,
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
        id: 'status',
        accessor: (d: any) => (d.status ? 'Sent' : 'Unsent'),
      },
      {
        Cell: (row: any) =>
          !row.original.status ? (
            <Button
              size="small"
              onClick={e => this.props.send(row.original.id)}
            >
              Send
            </Button>
          ) : (
            <span />
          ),
        Header: 'Action',
        accessor: undefined,
      },
    ];

    return (
      <ReactTable
        data={this.props.shown}
        columns={columns}
        showPagination={false}
        sortable={false}
        resizable={false}
        style={{
          outline: false,
          border: false,
        }}
        PadRowComponent={() => <span />}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  users: usersByIdSelector(state),
  checked: checkedSelector(state),
  shown: visibleUsers(state),
});

const mapDispatchToProps = {
  toggle: toggleSelected,
  send,
};

export const Table = connect(
  mapStateToProps,
  mapDispatchToProps
)(UCTable);
