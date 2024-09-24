import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import '../src/style/style.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks'
import PagesToRead from './components/PagesToRead/PagesToRead'
import About from './components/About/About'
import BookReview from './components/BookReview/BookReview'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
      path:"/home",
      element: <Home></Home>,
      loader:()=> fetch('data.json')
    },
    {
      path: "/listedbooks",
      element: <ListedBooks></ListedBooks>
    },
    {
      path:"/pagestoread",
      element: <PagesToRead></PagesToRead>
    },
    {
      path:"/about",
      element: <About></About>
    },
    {
      path: "/bookreview",
      element:<BookReview></BookReview>
    }

  ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
