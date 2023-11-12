import './App.css';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import Transactions from './components/Transactions';
import { InputProvider } from './context/InputProvider';

function App() {

  return (
    <InputProvider>
      <div className='container'>
        <Header />
        <Transactions />
        <AddTransaction />
      </div>
    </InputProvider>
  );
}

export default App;
