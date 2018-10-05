import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/login';
import Place from './pages/place';
import Register from './pages/Register';
import New from './pages/new';
import './App.css';
import Dashboard from './pages/dashboard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const userRegister = false;

class App extends Component {

  home(){
    if(userRegister) return Dashboard
    return Home
  }

  render() {
    return (
      <section>
        <TransitionGroup>
          <CSSTransition
            classNames="transition"
            timeout={300}
            key={this.props.location.pathname.split('/')[0]}
          >
            <Switch>
              <Route exact path="/" component={this.home()}/>
              <Route path="/lugares/:slug" component={Place} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/new" component={New} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </section>
    );
  }
}

export default withRouter(App);
