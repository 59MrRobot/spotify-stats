import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Error } from './pages/Error';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
]);

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
