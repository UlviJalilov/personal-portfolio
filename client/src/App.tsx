import { RouterProvider, } from 'react-router-dom';
import router from './Router';
import { ToastContainer } from "react-toastify";
import { SearchProvider } from './context/SearchProvider';
import "react-toastify/dist/ReactToastify.css";


const App = () => {

  return <SearchProvider>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={2000} />

  </SearchProvider>;
};

export default App;
