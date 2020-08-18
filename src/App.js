import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SiteHeader } from './components/SiteHeader';
import { fetchPersistLogin } from './services/Utils';
import LoginForm from './components/LoginForm';
import { setHcs } from './features/hcs/HcsSlice';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Hc from './features/hcs/Hc';

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
      return <Home/>
      } else {
      return <LoginForm/>
    }
  }

  renderHc = (routerProps) => {
    let {slug} = routerProps.match.params
    let foundHc = this.props.hcs.find(hc => hc.id === parseInt(slug, 10))
    if(foundHc && localStorage.token) {
      return <Hc hc={foundHc}/>
      } else {
        this.props.history.push('/')
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
          {localStorage.token ? <Navigation/> : null}
          <Switch>
            <Route path='/' exact render={this.renderHome}/>
            <Route path='/:slug' exact render={this.renderHc}/>
          </Switch>
        </main>
      </div>
    );
  }
}
  

export default connect(state => state)(withRouter(App));