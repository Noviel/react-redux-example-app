import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { hot } from 'react-hot-loader';
import styles from './App.module.css';

import { AppInput } from './AppInput';

export interface IAppProps {
  name: string;
}

export interface IAppState {
  value: string;
}

@hot(module)
export class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div className={styles.app}>
        <h1>Add recipient</h1>
        <AppInput onSubmit={e => console.log('ORDER FROM THE ROOT TUTUT', e)} />
      </div>
    );
  }
}
