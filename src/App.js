import { useSelector } from 'react-redux/es/hooks/useSelector';
import { increaceCount, decreaceCount } from './redux/ections/ectionCreation';
import { useDispatch } from 'react-redux';

const App = () => {
  const count = useSelector((store) => store?.counter?.count);
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
