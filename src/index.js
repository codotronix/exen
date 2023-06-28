import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './routes';
import { MainContextProvider } from './contexts/MainContext';
import { MainLayout } from './components/layouts';

// wrapped each page component inside the common layout
const wrappedRoutes = routes.map(r => ({
  ...r,
  element: <MainLayout><r.component /></MainLayout>
}))

// create the router
const router = createBrowserRouter(wrappedRoutes, {
  basename: "/exen",
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
