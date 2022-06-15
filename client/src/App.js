
import './App.css';
import { Header } from './components/Header';
import {Balance} from './components/Balance';
import {CreditDebit} from "./components/CreditDebit";
import {List} from "./components/List";
import {NewTransaction} from "./components/NewTransaction";

import {ProviderGlobal} from './context/StateGlobal';

function App() {
  return (
    <ProviderGlobal>        
      <Header/>
        <div className='container'>
          <Balance/>
          <CreditDebit/>
          <List/>
          <NewTransaction/>
        </div>
    </ProviderGlobal>

  );
}

export default App;
