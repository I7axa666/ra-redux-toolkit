import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { Provider } from 'react-redux'
import { store } from './store/store.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FavoritList from './components/FavoritList.jsx'
import ViewMovie from './components/ViewMovie.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  { 
    path: "/favorites", 
    element: <FavoritList /> 
  },
  { 
    path: "/:id", 
    element: <ViewMovie />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
