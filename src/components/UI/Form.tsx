import React from 'react';

export interface IFormProps {
  onSubmit: (e: React.SyntheticEvent<EventTarget>) => void;
}

export class Form extends React.Component<IFormProps> {
  private onSubmitWrapper: (e: React.SyntheticEvent<EventTarget>) => void;

  constructor(args: IFormProps) {
    super(args);

    this.onSubmitWrapper = (e: React.SyntheticEvent<EventTarget>) => {
      e.preventDefault();
      this.props.onSubmit(e);
    };
  }

  public render() {
    return <form onSubmit={this.onSubmitWrapper}>{this.props.children}</form>;
  }
}
