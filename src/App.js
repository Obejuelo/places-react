import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import Router from './pages/route';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends Component {

  render() {
    return (
      <section>
        <TransitionGroup>
          <CSSTransition
            classNames="transition"
            timeout={300}
            key={this.props.location.pathname.split('/')[0]}>
            
            <Router/>

          </CSSTransition>
        </TransitionGroup>
      </section>
    );
  }
}

export default withRouter(App);
