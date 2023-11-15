import { useSelector } from 'react-redux';

import { increaceCount, decreaceCount } from './redux/ections/ectionCreation';
import { useDispatch } from 'react-redux';

const App = () => {
  const count = useSelector((store) => store?.counter?.count || 0);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaceCount());
  };
  const handleDecrease = () => {
    dispatch(decreaceCount());
  };

  return (
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;

// import { UseSelector, useDispatch } from 'react-redux/es/hooks/useSelector';
// import { increaseCount, decreaceCount } from './redux/ections/ectionCreation';

// const App = () => {
//   const handleIncrease = () => {};
//   const handleDecrease = () => {};

//   const count = useSelector((store) => store?.counter?.count);
//   console.log(store);
//   return (
//     <div>
//       <button onClick={handleIncrease}>+1</button>
//       <button onClick={handleDecrease}>-1</button>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// export default App;
