import { useSelector, useDispatch } from 'react-redux';
import { getNews } from './redux/ections/ectionCreation';
import News from '../src/components/news/news';

const App = () => {
  const latestNews = useSelector((store) => store?.news?.latestNews || []);
  const popularNews = useSelector((store) => store?.news?.popularNews || []);
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} title="Latest News" />
      <News news={popularNews} title="Popular News" />
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
