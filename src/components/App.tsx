import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import styles from './App.module.css';

import { AppInput } from './AppInput';
import { DeleteButton } from './DeleteButton';
import { Filter } from './Filter';
import { Table } from './Table';

export interface IAppProps {
  store: any;
}

export interface IAppState {
  value: string;
}

@hot(module)
export class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <div className={styles.app}>
          <h1>Add recipient</h1>
          <AppInput />
          <DeleteButton>DELTEE</DeleteButton>
          <Filter />
          <Table />
        </div>
      </Provider>
    );
  }
}
