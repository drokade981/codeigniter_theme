import React, {useState} from 'react'


function UseState() {
    const [count, setCount] = useState(() => {
        console.log('clicked');
        return 0;
    });
    const [name, setName] = useState('dev');
    const [active, setActive] = useState(true);
    const [list, setList] = useState([]);

    function increment () {
        // setCount(count+1)
        setCount((prevState) => prevState+1); // prevState is used to get previous state
        setCount((prevState) => prevState+1);
    }

    const addName = (e) => {
        e.preventDefault();
        console.log(name)
        setList([...list,  name]);
        setName("")
    }

    return (
    <div>
        <h2>UseState</h2>
        <button onClick={() => {if(count > 0) { setCount(count-1)}} }>-</button>
        count {count}
        <button onClick={() => increment()}>+</button>

        <button onClick={() => setActive(!active)}>Active</button>

        <hr/>
        <h4>Hello {name}</h4>
        <button onClick={() => setName('Happy')}>Change Name</button>
        <hr/>

        <form onSubmit={addName}>
            <input type='text' value={name} placeholder='enter name'
            onChange={(e) => setName(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseState