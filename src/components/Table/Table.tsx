import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

import { send, toggleSelected } from '../../store/actions';
import { checkedSelector } from '../../store/checked';
import { IUserData, usersByIdSelector, visibleUsers } from '../../store/users';

import { IAppState } from '../../store/store';
import { Button } from '../UI/Button';
import { Checkbox } from '../UI/Checkbox';

export interface ITableProps {
  shown?: IUserData[];
  toggle: (id: string) => void;
  send: (id: string) => void;
  checked: string[];
}

export class BaseTable extends React.Component<ITableProps> {
  public render() {
    const columns = [
      {
        Cell: (row: any) => (
          <Checkbox
            onChange={e => this.props.toggle(row.original.id)}
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

const mapStateToProps = (state: IAppState) => ({
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
)(BaseTable as any);
