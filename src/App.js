import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import history from './history';
import MainPage from './components/MainPage';
import ListPage from './components/ListPage';
import InfoPage from './components/InfoPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" component={MainPage} exact />              
          <Route path="/list" component={ListPage} />
          <Route path="/info" component={InfoPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
