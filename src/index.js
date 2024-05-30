import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/components/ReduxToolkitLogin/constants/theme';

import { PersistGate } from 'redux-persist/integration/react';
//стор для редакс:
// import { store } from './components/Redux/redux/store';
// стор для реакдс тулкит и редакс персист (основной):
import { store } from './components/ReduxToolkit/redux/store';

// стор для редакс асинк:
// import { store } from './components/ReduxAsync/redux/store';

import { persistor } from 'components/ReduxToolkit/redux/store';

//* стор і персістор мають бути з одного файлу!
// import { store } from './components/Redux-persist/redux/store';
// import { store } from './components/ReduxToolkitLogin/redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/practice">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
