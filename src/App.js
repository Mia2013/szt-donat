import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },

]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
