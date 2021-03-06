import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      time: new Date()
    }
    console.log('component being constructed')
  }

  // This method gets triggered after a component goes from being a ReactElement to a HTML Node that is attatched to the DOM
  componentDidMount() {
    console.log('component mounted!')

    this.intervalId = setInterval(() => {
      this.setState((state) => {
        return {
          time: new Date()
        }
      })
    }, 1000);
  }

  componentDidUpdate() {
    console.log('component did update')
  }

  componentWillUnmount() {
    console.log('component will unmount')
    clearInterval(this.intervalId)
  }

  render() {
    console.log('component rendered!')
    return(
      <div>
        {this.state.time.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock;
