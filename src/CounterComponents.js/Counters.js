import React, { Component } from 'react';
import Counter from './Counter.js'

class Counters extends Component {

  render() { 
    const { onReset, counters, onDelete, onIncrement} = this.props
    
    return ( 
      <div>
        <button onClick={onReset} classname="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map(counter => (
          <Counter 
          key={counter.id} 
          onDelete={onDelete} 
          onIncrement={onIncrement} 
          counter={counter}/>
        ))}
      </div>
    );
  }
}
 
export default Counters;