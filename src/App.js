import React from 'react';
import Section from './components/Section';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsMovie from './components/Section/DetailsMovie';
import SectionMovies from './components/Section/SectionMoviesPaginate';
import { MoviesPaginate } from './components/demo-paginate/demo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <Router>	
    		<MoviesPaginate />
       		<Switch>
       			<Route exact path="/" component={Section} />
       			<Route exact path="/detailsMovie" component={DetailsMovie} />
       		</Switch>
    </Router>
  );
}

export default App;


