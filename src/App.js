import React from 'react';
import Section from './components/Section';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsMovie from './components/Section/DetailsMovie';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>	
       		<Switch>
       			<Route exact path="/" component={Section} />
       			<Route exact path="/detailsMovie" component={DetailsMovie} />
       		</Switch>
    </Router>
  );
}

export default App;


