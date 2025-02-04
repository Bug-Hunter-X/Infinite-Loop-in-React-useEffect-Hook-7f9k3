```javascript
import React, { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  useEffect(() => {
    //This is an example of use of usecallback and prevents the infinite loop. 
    //Remove the example to see the bug in action
    const interval = setInterval(incrementCount, 1000);
    return () => clearInterval(interval);
  }, [incrementCount]);

  return <div>Count: {count}</div>;
}
export default MyComponent;
```