import logo from './logo.svg';
import './App.css';
import { SignupPage } from './Pages/Signup';
import Navbar from './Componenets/Navbar';
import MainRoutes from './Routes/mainRoutes';
import Example from './Pages/example';
import Faq from './Componenets/Faq';
import Slider from './Componenets/Slider';
import ManageItems from './Pages/ManageItemsPage';
import MainNavbar from './Componenets/MainNavbar';




function App() {
  // ()
  return (
    <div className="App">
      {/* <Navbar/> */}

     
      {/* <Example/> */}
      {/* <Slider/> */}
    
      <MainNavbar/>
      <ManageItems/>
    </div>

  );
}






export default App;
