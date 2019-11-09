import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './views/Main';
import Chat from './views/Chat';
import Profile from './views/Profile';
import User from './views/User';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/profile" component={User} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/chat/:id" component={Chat} />
      </Switch>
      </BrowserRouter>
      <BottomNav />
    </div>
  );
}

export default App;
