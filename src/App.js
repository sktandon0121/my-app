import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  
  state = {
    person : [
      {name:  "Subodh",age:21},
      {name:  "Manu",age:15},
    ],
    showPerson:false
  }
  
  switchNameHandler = () => {
    this.setState({person:[{name:  "Subodh Tandon",age:21},
      {name:  "Manu Tandon",age:14},]})
  }
  nameChangeHandler = (event) => {
    this.setState({
      person:[
        {name:"Harshu" , age:12},
        {name:event.target.value,age:17}
    ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson:!doesShow
    });
  }

  render() {
    return (
      <div className="App">
        <h1>I am using React js </h1>
        <p>this is working !!!</p>
        <button onClick={this.togglePersonHandler}>Switch</button>
        { 
          this.state.showPerson === true ?
          <div>
            <Person name={this.state.person[0].name} age={this.state.person[0].age} />
            <Person name={this.state.person[1].name} age={this.state.person[1].age}
              changed={this.nameChangeHandler}
            >Hobbies: Bike Racing</Person>
          </div>
          : null
        }
        
      </div>
    );
  }
}

export default App;
