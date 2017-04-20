import css from '../styles/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <h1>Home</h1>
)

const About = () => (
  <h1>About</h1>
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
