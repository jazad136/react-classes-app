import React, {useState} from 'react';
import logo from './logo.svg';
import {Grid, Segment, Container} from 'semantic-ui-react';
import TableBlock2 from './class-representation/TableBlock2';
import ClassPage from './class-representation/ClassPage'
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

const getBlockData = () => { 
  return ''
}
const App = () => {
  const [currentClass, setClasses] = useState([]);
  const images = [
    "index-images/algos-rslide.png"
  ]
  const imageCaptions = [
    "",
    "Live Demonstrations",
    "Running Time Analysis",
  ] 
  const descriptions = [
    "Advanced Data Structures and Algorithms",
    "In this sorting demo, a player holds in their left hand a deck of unsorted \"cards\" with numbers, and his task is to move them to the right hand one at a time in sorted order.",
    "Simpler algorithms were given a treatment that analyze expected amount of time the algorithm should run in the best and worst cases. Insertion sort the element that is least in the leftmost spot, with \"L\" serving as the algorithm's output list by the end.",
    "We explore dynamic"
  ]
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui twelve wide column">
          <div className="App">
            <h2>Classes</h2>
            {/* <table class="ui table celled"> */}

            <ClassPage 
            name="SENG 2000"
            descriptions={descriptions} 
            imageCaptions={imageCaptions}/>
            {/* </table> */}
          </div>
        </div>
        <div className="ui four wide column">Logo goes here.</div>
      </div>
    </div>
  );
}

export default App;
