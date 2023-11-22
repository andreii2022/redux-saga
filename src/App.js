import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount, getLatestNews } from './redux/ections/ectionCreation';

const App = () => {
  const count = useSelector((store) => store?.counter?.count || 0);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };
  const handleDecrease = () => {
    dispatch(decreaseCount());
  };
  const handleNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleNews}>Get News</button>
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
