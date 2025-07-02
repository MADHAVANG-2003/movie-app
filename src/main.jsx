// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import MainPage from './pages/MainPage/MainPage';
import Popular from './pages/Popular/Popular';
import Top from './pages/Top/Top';
import Upcoming from './pages/Upcoming/Upcoming';
import MovieDetails from '../src/components/MovieDetails/MovieDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'popular', element: <Popular /> },
      { path: 'top', element: <Top /> },
      { path: 'upcoming', element: <Upcoming /> },
      { path: 'movie/:id', element: <MovieDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
