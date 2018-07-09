import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { hot } from 'react-hot-loader';
import styles from './App.module.css';

import { Form } from './Form';
import { Input } from './Input';

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
        <Form onSubmit={e => console.log(e)}>
          <Input placeholder="example@mail.com" name="email" label="Email" />
          <Input placeholder="Alexander Snov" name="name" label="Name" />
          {this.props.name}
          <button type="submit">Add email</button>
        </Form>
      </div>
    );
  }
}
