//useful when child component rely on props like event handler 
// memorized function  ,prevent uncesssary re-creation ,when pass as props to child component 

import React, { useState, useCallback,memo } from 'react';

const Child = memo(({ onButtonClick }) => {
  console.log('Child rendered');
  return <button onClick={onButtonClick}>Click Me</button>;
});

const Parent = () => {
    console.log('parent rendered ')
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
//    
  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onButtonClick={handleClick} />
    </div>
  );
};

export default Parent;
