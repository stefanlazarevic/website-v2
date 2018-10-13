import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { preloadReady } from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from '../app/redux/store/global.store';

import App from '../app/App';

const store = createStore(window.REDUX_DATA);

preloadReady().then(() => {
  hydrate(
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>,
    document.getElementById('app')
  );
});
