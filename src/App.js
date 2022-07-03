import React from 'react';
import logo from './logo.svg';
import TableBlock2 from './class-representation/TableBlock2';
import './App.css';


const indata = {
  entryId: '1',
  classesName: 'SENG 2000',
  descriptions: [
    'Advanced Data Structures and Algorithms'
  ] 
}
const blockData = {
  name: 'SENG 2000',
  desc1: 'Advanced Data Structures and Algorithms'
}
const blockData2 = [
  {
    name: 'SENG 2000',
    desc1: 'Advanced Data Structures and Algorithms' 
  },
  {
    name: 'SENG 1000',
    desc1: 'Software Engineering Foundations'
  }
]

function App() {
  return (
    <div className="ui container">
    <div className="ui grid">
      <div className="ui twelve wide column">
        <div className="App">
          <h2>Classes</h2>
          <table class="ui table celled">
            {/* <tr>
              <TableBlock2
                blockData={blockData}
              />
            </tr> */}
          
          <TableBlock2 blockData={blockData2} />
          </table>
        </div>
      </div>
      <div className="ui four wide column">
        Logo goes here.
      </div>
    </div>
    </div>
  );
}

export default App;
