import logo from './logo.svg';
import './App.css';
import { SignupPage } from './Pages/Signup';
import Navbar from './Componenets/Navbar';
import MainRoutes from './Routes/mainRoutes';
import Example from './Pages/example';

function App() {
  // ()
  return (
    <div className="App">
      <Navbar/>
      {/* <MainRoutes/> */}
      <Example/>
    </div>

  );
}

export default App;
