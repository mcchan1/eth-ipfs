import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import web3 from './web3';

const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
 
// ipfs.add('shibas world!', (err, result) => {
//   console.log(err, result);
// });

// ipfs.cat("QmXfz4jMCuYrU7rXAUE2KR9qfdn2uvEGHoBaqjxxHtKnyD", (err, result) => {
//   console.log(err, result);
// });


class App extends Component {

  state = {
    value: ''

  };
 
  onSubmit = (event) => {
    event.preventDefault();
    

    ipfs.add(this.state.value, (err, result) =>{
        console.log(err,result);

        console.log("this value: " + this.state.value + "  is at ipfs hash # " + result);    
    });

    
  };
 
  render() {

    console.log(web3.version);
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Qoo Ethereum with IPFS and Create React App</h1>
        </header>
        
        <hr />

        <form onSubmit={this.onSubmit}>
          <label> data to send to ipfs </label>
            <input
              value = {this.state.value}
              onChange = {event => this.setState({value: event.target.value})}
            />

           <button> Send it </button>
         </form>

         <p>{this.state.value}</p>
         
      </div>
    );
  }
}

export default App;
