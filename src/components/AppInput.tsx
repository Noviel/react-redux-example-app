import React from 'react';

import { Button } from './Button';
import { Form, IFormProps } from './Form';
import { Input } from './Input';

interface IAppProps {
  onSubmit: IFormProps['onSubmit'];
}

export const AppInput: React.SFC<IAppProps> = props => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Input placeholder="example@mail.com" name="email" label="Email" />
      <Input placeholder="Alexander Snov" name="name" label="Name" />
      <Button name="add-email">Add email</Button>
    </Form>
  );
};
