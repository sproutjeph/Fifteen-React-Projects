import './App.scss';
import CartContainer from './components/CartContainer';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';
const App = () => {
  const { isLoading } = useGlobalContext();

  return (
    <>
      <Navbar />
      {isLoading ? <Loading /> : <CartContainer />}
    </>
  );
};

export default App;
