import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './components/mainpage/MainPage';
import AdminPage from './components/adminpage/AdminPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={MainPage}/>
          <Route path='/admin' component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default App;

