import { useSelector, useDispatch } from 'react-redux';
import { getNews } from './redux/ections/ectionCreation';
import News from './components/news/news';

const App = () => {
  const { latestNews, popularNews } = useSelector((store) => store?.news || {});
  const { latestNewsError, popularNewsError } = useSelector((store) => store?.errors || {});
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
      <News news={popularNews} error={popularNewsError} title="Popular News" />
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
