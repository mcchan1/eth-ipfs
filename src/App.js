import {Table, Grid, Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import ipfs from './ipfs';
import storehash from './storehash';

// ipfs.cat("QmXfz4jMCuYrU7rXAUE2KR9qfdn2uvEGHoBaqjxxHtKnyD", (err, result) => {
//   console.log(err, result);
// });

class App extends Component {
 
    state = {
      ipfsHash:null,
      buffer:''  
    };
   
    async componentDidMount() {
      console.log('componentDidMount');   

    }

  captureFile =(event) => {
      event.stopPropagation()
      event.preventDefault()
      const file = event.target.files[0]
      let reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend = () => this.convertToBuffer(reader)    
    };


  convertToBuffer = async(reader) => {

    //file is converted to a buffer to prepare for uploading to IPFS
      const buffer = await Buffer.from(reader.result);
    //set this buffer with es6
      this.setState({buffer});
  };

    onSubmit = async (event) => {
      event.preventDefault();
      
      //save document to IPFS,return its hash#, and set hash# to state
      await ipfs.add(this.state.buffer, (err, ipfsHash) => {
        console.log(err,ipfsHash);
        this.setState({ ipfsHash:ipfsHash[0].hash });
      }) //await ipfs add
    }; //onSubmit end

   
    render() {
      
      return (
        <div className="App">
          <header className="App-header">
            <h1>Simple Ethereum and IPFS with Create React App</h1>
          </header>
          
          <hr />

        <Grid>
          <p> Data to send to IPFS </p>
          <Form onSubmit={this.onSubmit}>
       
                <input 
                  type = "file"
                  onChange = {this.captureFile}
                />

             <Button type="submit"> Send it </Button>
           </Form>

            <hr />

              <Table bordered responsive>
              <thead>
                <tr>
                  <th>Tx Receipt Category</th>
                  <th>Values</th>
                </tr>
              </thead>
             
              <tbody>

                 <tr>
                  <td>IPFS Hash # stored on Eth Contract</td>
                  <td>{this.state.ipfsHash}</td>
                </tr>

              </tbody>
            </Table>
        </Grid>
     </div>
      );
    } //render
}

export default App;
