import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import Statistics from './components/Statistics/Statistics';
import './index.css';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  feedbackHandler = e => {
    this.setState(prevState => {
      const buttonId = e.target.id;
      return {
        [buttonId]: prevState[buttonId] + 1,
      };
    });
  };
}
