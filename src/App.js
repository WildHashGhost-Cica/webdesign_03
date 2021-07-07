import React from 'react';
import GlobalSytle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Homepage/Home';
import { Navbar ,Footer } from './components';
import Pricing from './components/Pricing/Pricing';


function App() {
  return (
    <Router>
      <GlobalSytle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
