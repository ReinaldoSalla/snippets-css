import React from 'react';
import './App.css';

const Item = ({ index }) => (
  <div className='item'>
    <div className='item-container'>
      <div className='item-text'>
        Content #{index + 1}
      </div>
    </div>
  </div>
);

const Items = ({ number }) => {
  const listItems = Array(number).fill(0).map((_, index) => 
    <Item key={index} index={index} />
  );
  return (
    <div className='items'>
      {listItems}
    </div>
  );
};

const App = () => (
  <Items number={6} />
);

export default App;