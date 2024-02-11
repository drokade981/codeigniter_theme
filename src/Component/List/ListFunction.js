import React from 'react'
import PersonList from './PersonList';
function ListFunction() {
    const names = ['bruce', 'clark', 'dev'];
    const nameList = names.map((name, i) => <h2 key={i}>{name}</h2>);
    const persons = [
        {id : '1', name: 'bruce', age: 10, skill : 'js' },
        {id : '2', name: 'clark', age: 20, skill : 'php' },
        {id : '3', name: 'john', age: 30 , skill : 'laravel'},
      ];
      const personList = persons.map((person) => <h2 key={person.id}>I am {person.name} {person.skill}</h2>)
    return (
        <div>
            {/* { nameList } */}
            {/* { personList } */}
            <PersonList person={nameList} />
            <PersonList person={personList} />
        </div>
    )
}

export default ListFunction