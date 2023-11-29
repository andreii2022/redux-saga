import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

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
