import logo from './logo.svg';
import './App.css';
import { SignupPage } from './Pages/Signup';
import Navbar from './Componenets/Navbar';
import MainRoutes from './Routes/mainRoutes';

import { HomePage } from './Pages/HomePage';


import Additem from './Pages/Additem';

// import Additem from './Pages/Additem';
import ManageItems from "./Pages/ManageItemsPage"
import MainNavbar from "./Componenets/MainNavbar"
import SearcToDelete from './Componenets/SearcToDelete';
import Loadder from './Componenets/Loadder';


function App() {
  return (
    <div className="App">
      <MainRoutes/>
    </div>
    
  );
}

export default App;
