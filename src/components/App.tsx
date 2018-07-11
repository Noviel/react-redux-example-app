import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { AppInput } from './AppInput';
import { ControlPanel } from './ControlPanel';
import { Table } from './Table';

import styles from './App.module.css';

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
          <ControlPanel />
          <Table />
        </div>
      </Provider>
    );
  }
}
