import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from './views/Main';
import Chat from './views/Chat';
import Profile from './views/Profile';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';

function App() {
  const myself = useSelector(state => state.main.myself);
  return (
    <div className='App'>
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/profile/:id' component={Profile} />
          <Route path='/profile' component={Profile} />
          <Route path='/chat/' component={Chat} />
        </Switch>
        {myself || <BottomNav />}
      </BrowserRouter>
    </div>
  );
}

export default App;
