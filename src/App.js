import React from 'react';
import Section from './components/Section';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsMovie from './components/DetailsMovie';
import Footer from './components/Footer';
import Container from './components/Container';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


function App() {
  let { id } = useParams();
  

  return (
    <Router>
       		<Switch>
       			<Route exact path="/" component={Container} />
       			<Route exact path="/movie/:id" component={DetailsMovie} />
       		</Switch>
          <Footer />
    </Router>
  );



}

export default App;
