import React, { Component } from 'react';
// import logo from './logo.svg';
import { connect } from 'react-redux';
import { appleApiCall } from '../state-management/appleCode/actions';
import '../App.css';

class App extends Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   test: 'Hello World',
//     //   appleInterview: this.props.appleCodeList
//     // };
//   }

  componentWillMount() {
    this.props.appleApiCall();
  }

  componentDidMount() {
    this.testInterviewQues();
  }

  testInterviewQues = () => {
    const div = this.refs["Progress2"] || null;
    // debugger;
    for (var i = 0; i < 5; i++) {
      const btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button ' + i));
      btn.addEventListener('click', (function(i) {
        return function() { console.log(i); };
      })(i));
      if(div && div !== undefined) {
        div.appendChild(btn);
      }
    }
  }

  interviewFunc = () => {
    this.setState({
      test: 'initTest state changed'
    });
    this.testInterviewQues();
  }

  btnShow = {};

  removeTitle = () => {
    const row = this.refs["mylist"] || null;
    console.log('list row: ' + row);
    row.className = 'mylistTitleHide';
  }

  addTitle = () => {
    const row = this.refs["mylist"] || null;
    console.log('list row: ' + row);
    row.className = 'mylist';
  }

  logMouseEnter = (id) => {
    const div = this.refs[id] || null;
    let c = div.childNodes;
    console.log('child node: ' + c[1]);
    const btn = document.createElement('button');
    if(id && id <= 3) {
      btn.appendChild(document.createTextNode('Remove'));
      btn.addEventListener("click", this.removeTitle);
    }
    if(id && id > 3) {
      btn.appendChild(document.createTextNode('Add'));
      btn.addEventListener("click", this.addTitle);
    }
    if(div && div !== undefined && c[1] === undefined) {
      div.appendChild(btn);
    }
    // console.log(id);
    this.btnShow.id = id;
    console.log('enter id: ' + this.btnShow.id)
  }

  logMouseLeave = (id) => {
    // console.log(id);
    this.btnShow.id = id;
    console.log('leave id: ' + this.btnShow.id)
  }

  generateRow = (arr, key) => {
    return (
      <tr key={key} ref={key} className={key}>
        {arr.map(obj => {
          return (
            <React.Fragment key={obj.id}>
              <td>{obj.title}</td>
              <td ref={obj.id}>
                <img
                  src={obj.img}
                  alt={obj.title}
                  onMouseEnter={() => this.logMouseEnter(obj.id)}
                  onMouseLeave={() => this.logMouseLeave(obj.id)}
                />
              </td>
            </React.Fragment>
          );
        })}
      </tr>
    );
  }

  render() {
    console.log(this.props.appleCodeList);
    const { appleList } = this.props.appleCodeList;

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
        <table>
          <tbody>
            {appleList ?
              Object.keys(appleList).map(key => this.generateRow(appleList[key], key)) : null}
          </tbody>
        </table>
        {/* <div>
          {appleInterview && appleInterview.mylist && appleInterview.mylist[0] ?
            appleInterview && appleInterview.mylist && appleInterview.mylist[0].img : null}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ appleCodeList: state.appleCode });

// const ConnectedApp = connect(mapStateToProps, {appleApiCall})(App);

export default connect(mapStateToProps, { appleApiCall })(App);

// export default AppContainer;
