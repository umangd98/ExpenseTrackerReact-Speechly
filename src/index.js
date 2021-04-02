import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/context';
import App from './App';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId="aed140ed-eeb3-439e-be5c-e23d5d938d80" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
