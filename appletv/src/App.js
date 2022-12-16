import logo from './logo.svg';
import './App.css';
import { SignupPage } from './Pages/Signup';
import Navbar from './Componenets/Navbar';
import MainRoutes from './Routes/mainRoutes';
import Example from './Pages/example';
import Faq from './Componenets/Faq';
import Slider from './Componenets/Slider';

import { HomePage } from './Pages/HomePage';

// import Additem from './Pages/Additem';
import ManageItems from "./Pages/ManageItemsPage"
import MainNavbar from "./Componenets/MainNavbar"
import SearcToDelete from './Componenets/SearcToDelete';

function App() {
  // ()
  return (
    <div className="App">
      <MainNavbar/>

      {/* <MainRoutes/> */}
      {/* <SearcToDelete/> */}
      <ManageItems/>

    </div>
    
  );
}

export default App;