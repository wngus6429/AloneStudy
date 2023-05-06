import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BoardList from './routes/boardList';
import ErrorPage from './error-page';
import Board from "./routes/board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/list",
    element: <BoardList/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "board/:boardId",
    element: <Board />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
