import React, { Component } from 'react';
import App from './view/appleCode';
import './App.css';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <a
            className="App-header"
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        {/* <div>{test}</div> */}
        {/* <button onClick={this.interviewFunc}>update state</button> */}
        {/* <div id="Progress2" ref="Progress2"><span>aaa</span></div> */}
        {/* <table>
          <tbody>
            {appleInterview ?
              Object.keys(appleInterview).map(key => this.generateRow(appleInterview[key], key)) : null}
          </tbody>
        </table> */}
        {/* <div>
          {appleInterview && appleInterview.mylist && appleInterview.mylist[0] ?
            appleInterview && appleInterview.mylist && appleInterview.mylist[0].img : null}
        </div> */}
        <App />
      </div>
    );
  }
}

export default AppContainer;
