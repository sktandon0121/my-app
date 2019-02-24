import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';


class App extends Component {
  
  state = {
    person : [
      {id :10,name:  "Manu",age:15},
      {id :20,name:  "Subodh",age:21},
      {id :30,name:  "Shukla",age:24},
    ],
    showPerson:false
  }
  
 
  nameChangeHandler = (event,id) => {

    const personIndex = this.state.person.findIndex(p=>{return p.id === id});

    const item = {...this.state.person[personIndex]};
    item.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = item;

    this.setState({
      person:persons
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson:!doesShow
    });
  }

  deletePersonHandler = (personIndex) =>{
    const person = [...this.state.person];
    person.splice(personIndex,1);
    this.setState({person:person});
  }
  render() {
    
    let person = null;
    let btnClass = '';
    const assignedClasses = [];
    if (this.state.person.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.person.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    if (this.state.showPerson) {
      person = (
        <div>
          <Persons
            persons={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            
          />
          
        </div>
      );
      btnClass = classes.red;
    }

    


    return (
      <div className={classes.App}>
        <h1>I am using React js!! </h1>
        <p className={assignedClasses.join(' ')}>this is working !!!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Switch</button>
        {person}
        
      </div>
    );
  }
}

export default App;
