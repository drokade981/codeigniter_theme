import React, { PureComponent } from 'react';
import {Button} from 'react-bootstrap';

export class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      data:10
    }
  }
  render() {
    // if (true) {
    //     throw new Error("custom Error");
    // }
    console.log(this.state);
    return (
      <div>
        Home
        <span>Pure Component</span>
        <Button onClick={() => this.setState({data:20})}>update</Button>
      </div>
    )
  }
}

export default Home