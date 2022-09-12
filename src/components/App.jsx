import Statistics from './statistics/Statistics';
import Section from './section/Section';
import React from 'react';
import FeedBackOptions from './feedback/FeedBackOptions';
import Notification from './notification/Notification';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  onClickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  onClickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      this.state.good
    );
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onClickGood={this.onClickGood}
            onClickNeutral={this.onClickNeutral}
            onClickBad={this.onClickBad}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
