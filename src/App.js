import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SiteHeader from './components/SiteHeader';
import { PrescriptionsList } from './features/prescriptions/PrescriptionsList';
import LoginForm from './components/LoginForm';

class App extends Component {

  renderHome = () => {
    if(localStorage.token) {
      return <PrescriptionsList/>
    } else {
      return <LoginForm/>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SiteHeader/>
          <hr/>
        </header>
        <main className="App-main">
          <Switch>
            <Route path='/' exact render={this.renderHome}/>
          </Switch>
        </main>
      </div>
    );
  }
}
  

export default connect(state => state)(withRouter(App));