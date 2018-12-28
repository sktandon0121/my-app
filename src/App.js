import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  
  state = {
    person : [
      {id :10,name:  "Manu",age:15},
      {id :20,name:  "Subodh",age:21},
      {id :30,name:  "Sachin Dheer",age:24},
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
    const style = {
      "backgroundColor": "green",
      "color": "white",
      "padding": "8px",
      "border": "1px solid blue",
      "cursor": "pointer",
      "fontFamily": "inherit"
    };
    let person = null;
    const classes = [];
    if (this.state.person.length <= 2) {
        classes.push('red');
    }
    if (this.state.person.length <= 1) {
        classes.push('bold');
        console.log(classes);
    }
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((item,index)=>{
            return <Person
              clicked = {()=>this.deletePersonHandler(index)} 
              name = {item.name}
              age = {item.age}
              key={item.id}
              changed={(event)=>this.nameChangeHandler(event,item.id)}
              
            />
          })}
          
        </div>
      );
      style.backgroundColor = "red";
    }

    


    return (
      <div className="App">
        <h1>I am using React js!! </h1>
        <p className={classes.join(' ')}>this is working !!!</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch</button>
        {person}
        
      </div>
    );
  }
}

export default App;
