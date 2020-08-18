import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SiteHeader } from './components/SiteHeader';
import PrescriptionsList from './features/prescriptions/PrescriptionsList';
import { fetchPersistLogin } from './services/Utils';
import LoginForm from './components/LoginForm';
import { setHcs } from './features/hcs/HcsSlice';

class App extends Component {

  componentDidMount() {
    if(localStorage.token) {
      fetchPersistLogin(localStorage.token)
        .then(this.handleResponse)
    } else {
      this.props.history.push('/')
    }
  }


  handleResponse = (response) => {
    console.log(response)
    if(!response.message) {
      let { token } = response
      let { hcs } = response.cardloader
      this.props.dispatch(setHcs({hcs, token}))
    } else {
        localStorage.clear()
      }
    }

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