import { Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import './App.css';
import { AccountSummary } from './Components/AccountSummary';
import { Balance } from './Components/Balance';
import {Header} from './Components/Header'
import {AddTransaction} from './Components/AddTransaction';
import { TransactionHistory } from './Components/TransactionHistory';
import { GlobalProvider } from './context/globalContext';
import { swDev } from './swDev';
import { initNotifications } from './firebaseNotifications';

function App() {
  useEffect(()=>{
    swDev();
    initNotifications();
  },[])
  
 
  return (
    <GlobalProvider>
      <div className="bg">
    <div className="App">
      <Paper  className="paper" elevation={3}>
        <Header/>
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </Paper>
    </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
