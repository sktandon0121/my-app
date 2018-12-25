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
  
 
  nameChangeHandler = (event) => {
    this.setState({
      person:[
        { id:  10,  name:"Harshu" , age:12},
        { id:  20,  name:event.target.value,age:17},
        { id:  30,   name: "Sachin Dheer", age: 24 },
    ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson:!doesShow
    });
  }

  deletePersonHandler = (personIndex) =>{
    const person = this.state.person;
    person.splice(personIndex,1);
    this.setState({person:person});
  }
  render() {

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((item,index)=>{
            return <Person
              clicked = {()=>this.deletePersonHandler(index)} 
              name = {item.name}
              age = {item.age}
              key={item.id}
              changed={this.nameChangeHandler}
              
            />
          })}
          
        </div>
      );
    }

    const style = { 
        "backgroundColor": "white", 
        "padding": "8px", 
        "border": "1px solid blue", 
        "cursor": "pointer", 
        "fontFamily": "inherit" 
      };


    return (
      <div className="App">
        <h1>I am using React js </h1>
        <p>this is working !!!</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch</button>
        {person}
        
      </div>
    );
  }
}

export default App;
