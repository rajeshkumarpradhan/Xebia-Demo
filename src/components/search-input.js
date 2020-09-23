import React from 'react';

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      timerSet: false,
      clickCount: 0,
      errorMessage: '',
      searchThresholdInSeconds: 60,
    }
  }

  setTimer() {
    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      this.setState({
        clickCount: 0,
        errorMessage: '',
        timerSet: false,
      });
    }, 1000 * this.state.searchThresholdInSeconds);
  }

  searchPlanets = (e) => {
    let { userDetails } = localStorage.getItem("userDetails")
    if (this.state.timerSet === false) {
      this.setState({timerSet : true})
      this.setTimer();
    }

    if (userDetails !== "Luke Skywalker") {
      if ( this.timer && this.state.clickCount <= 15 ) {
        this.props.search(e.target.value);
        this.setState({ clickCount: this.state.clickCount+1 });
      }

      if (this.state.clickCount === 16) {
        this.props.search('');
        this.setState({errorMessage : 'You are not allowed to perform more than 15 searches per minute'})
        this.setState({ clickCount: this.state.clickCount+1 });
      }
    } else {
      this.props.search(e.target.value);
    }
  }

  render() {
    return (
      <div class="no-padding">
        <input
          class="search-box"
          placeholder="Search for the planets"
          onKeyUp={this.searchPlanets}
        />
        <span class="error">
          { this.state.errorMessage }
        </span>
      </div>
    )
  }
}