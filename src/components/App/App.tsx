import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Dispatch, Store } from 'redux';

import { IAppState } from '../../store/store';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { CreateRecipientForm } from '../CreateRecipientForm/CreateRecipientForm';
import { Table } from '../Table/Table';

import styles from './App.module.css';

export interface IAppProps {
  store: Store<IAppState>;
}

@hot(module)
export class App extends React.Component<IAppProps, {}> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <div className={styles.app}>
          <h1>Add recipient</h1>
          <CreateRecipientForm />
          <ControlPanel />
          <Table />
        </div>
      </Provider>
    );
  }
}
