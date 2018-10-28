import React, { Component } from 'react';
import ClockShown from './ClockShown'

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}
	
	componentDidMount() {
		this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick() {
    this.setState({
      date: new Date()
    });
	}

  render() {
    return (
			<div>
			<ClockShown date={this.state.date}/>
      </div>
    );
  }
}

export default Clock