import React, { Component } from "react";
import { connect } from "react-redux";
import { appleApiCall } from "./state-management/appleCode/actions";
import App from "./view/appleCode";
import "./App.css";

class AppContainer extends Component {
  render() {
    const { appleApiCall, listObj } = this.props;
    const passProps = { appleApiCall, listObj };

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
        <App {...passProps} />
      </div>
    );
  }
}

// export default AppContainer;

// const mapStateToProps = state => ({ listObj: state.appleCode });
const mapStateToProps = state => ({ listObj: state.appleCode.appleListObj });

// const ConnectedApp = connect(mapStateToProps, {appleApiCall})(App);

const mapDispatchToProps = { appleApiCall };

/*
  // this is not related to curry or closure
  // it's the callback function, mapDispatcheToProps is the implementation of
  // callback fucnton, dispatch is the pass in callback function reference
  // inside the mapDispatchToProps, execute the callback
  function mapDispatchToProps(dispatch) {
    return {
      createCourse: course => dispatch(courseActions.createCourse(course))
    };
  }
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
