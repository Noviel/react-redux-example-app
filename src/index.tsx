import React from 'react';
import { render } from 'react-dom';

import { App } from './components/App';

import "./global.css";

const root = document.getElementById('app');

render(<App name="42!" />, root);
