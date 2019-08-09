import React from 'react';
import './App.css';

const TimeEntry = ({ time, onDelete }) => (
  <div className="time">
    { time.toString() + "  "}
    <button className="delete" onClick={() => { onDelete(time) }} href>Delete</button>
  </div>
)

class App extends React.Component { 
  state = {
    times: [ new Date()]
  }

  handleClick = () => { 
    this.setState((prevState) => (
      { times: prevState.times.concat(new Date())}
    ))
  }

  removeTime = (timeToDelete) => { 
    this.setState((prevState) => ({
      times: prevState.times.filter(time => time !== timeToDelete)
    }))
  }

  render() {
    const timeElements = this.state.times.map((time, index) => (
      <TimeEntry key={index} time={time} onDelete={this.removeTime}/>
    ))

    return (
      <div>
        <h1>Track Times</h1>
        <button onClick={this.handleClick}>Add a time</button>
        { timeElements }
      </div>
    );
  }
}

export default App;
