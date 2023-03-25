
import './App.css';
// import { Question } from './components/Question';
// import { Quiz } from './components/Quiz';
// import { Main } from './components/Main';
import { Ketqua } from './components/Ketqua';
import { Main } from './components/Main';
import { Quiz } from './components/Quiz';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path:  "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Ketqua />,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
