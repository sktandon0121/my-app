import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((item, index) => {
  return <Person
    clicked={() => props.clicked(index)}
    name={item.name}
    age={item.age}
    key={item.id}
    changed={(event) => props.changed(event, item.id)}

  />
});


export default persons;