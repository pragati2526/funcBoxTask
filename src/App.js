import './App.css';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import Pay from './components/pay';
import Order from './components/order'
import Congrats from './components/congrats'
import Footer from "./components/footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div >
        
        <Switch>
          <Route exact path="/">
          <Navbar/>
            <LandingPage/>
            <Footer/>
          </Route>
          <Route path="/pay">
          <Navbar/>
            <Pay/>
            <Footer/>
          </Route>
          <Route path="/order">
          <Navbar/>
            <Order/>
            <Footer/>
          </Route>
          <Route path='/congratulations'>
            <Congrats/>
          </Route>
        </Switch>

      </div>
      </Router>
   
  );
}

export default App;
