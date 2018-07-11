import React from 'react';

import { DeleteButton } from './DeleteButton';
import { Filter } from './Filter';

export class ControlPanel extends React.Component<{}, any> {
  public render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}
      >
        <Filter />
        <DeleteButton>Delete selected recipients</DeleteButton>
      </div>
    );
  }
}
