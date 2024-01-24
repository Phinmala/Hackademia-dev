import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header.component";
import DashboardPage from './pages/dashboard.page';
import SettingsPage from "./pages/settings.page";
import ProfilePage from "./pages/profile.page";
import ModuleOne from './pages/module-one.page';


const router = createBrowserRouter([
  {
      path: "/",            // the root 
      element: <Header/>,
      children: [
        {
          path: "dashboard",
          element: <DashboardPage/>,
        },
        {
          path: "settings", 
          element: <SettingsPage/>,
        },
        {
          path: "profile", 
          element: <ProfilePage/>,
        },
        {
          path: "module-one", 
          element: <ModuleOne/>,
        },
      ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
