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
  render() {
    const { good, neutral, bad } = this.state;
    const feedbacksTotalAmount = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback!">
          <Feedback options={this.state} leaveFeedback={this.feedbackHandler} />
        </Section>
        <Section title="Statistics">
          {feedbacksTotalAmount === 0 && (
            <Notification message="No feedback given" />
          )}

          {feedbacksTotalAmount > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={feedbacksTotalAmount}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
