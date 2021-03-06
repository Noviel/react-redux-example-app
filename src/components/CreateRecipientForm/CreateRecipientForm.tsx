import React from 'react';
import { connect } from 'react-redux';

import { Button } from '../UI/Button';
import { Form } from '../UI/Form';
import { Input } from '../UI/Input';

import { createUser } from '../../store/actions';
import { IUserData } from '../../store/users';

interface ICreateRecipientFormProps {
  createUser: (user: Partial<IUserData>) => void;
}
interface ICreateRecipientFormState {
  name: string;
  email: string;
}

export class BaseCreateRecipientForm extends React.Component<
  ICreateRecipientFormProps,
  ICreateRecipientFormState
> {
  public state = {
    name: '',
    email: '',
  };

  public handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ name: event.currentTarget.value });
  };

  public handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ email: event.currentTarget.value });
  };

  public render() {
    return (
      <Form
        onSubmit={e => {
          this.props.createUser({
            name: this.state.name,
            email: this.state.email,
            status: false,
          });

          this.setState({ email: '', name: '' });
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
          }}
        >
          <Input
            value={this.state.email}
            placeholder="example@mail.com"
            name="email"
            label="Email"
            onChange={this.handleEmailChange}
            style={{ marginRight: '14px' }}
          />
          <Input
            value={this.state.name}
            placeholder="Alexander Snov"
            name="name"
            label="Name"
            onChange={this.handleNameChange}
            style={{ marginRight: '14px' }}
          />
          <Button type="submit">Add email</Button>
        </div>
      </Form>
    );
  }
}

export const CreateRecipientForm = connect(
  state => state,
  { createUser }
)(BaseCreateRecipientForm);
