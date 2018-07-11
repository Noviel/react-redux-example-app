import React from 'react';

import { DeleteButton } from './DeleteButton';
import { Filter } from './Filter';

export const ControlPanel: React.SFC<{}> = _ => (
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
