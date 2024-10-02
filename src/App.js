// import logo from './logo.svg';
import "./App.css";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Head from "./components/headsection";
import Login from "./components/or_login";
import Right from "./components/rightpage";
import Signup from "./components/signup";
import Form from "./components/form";

function App() {
  const Router = createBrowserRouter([
    
     {
      path:"/",
      element:<Form/>
     },

     {
      path:"/sign-up",
      element:<Signup/>
    }
  ])
  return (
    <div className="grid grid-cols-2 heigh gap-4">
      <div className="cols-span-1  pt-20 pl-24">
        {/* headsection */}
        <Head />


        
        <RouterProvider router={Router}/>
        
        

        {/* or with link */}
        <Login />
      </div>

      {/* right page */}
      <Right/>
    </div>
  );
}

export default App;
