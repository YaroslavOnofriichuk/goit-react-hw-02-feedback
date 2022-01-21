import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = e => {
        const key = e.target.outerText.toLowerCase();
        this.setState(state => ({
            [key]: (state[key] += 1),
        }));
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        let value = (this.state.good * 100) / this.countTotalFeedback();
        value = value.toFixed(0);
        return value;
    };

    render() {
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() > 0 ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={
                                this.countPositiveFeedbackPercentage() > 0
                                    ? this.countPositiveFeedbackPercentage()
                                    : 0
                            }
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </>
        );
    }
}

export default App;
