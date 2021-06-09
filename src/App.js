import React from 'react'
import { ActionSearchList } from './pages/ActionSearchList'
import { MusicList } from './pages/MusicList'
import { DetailPage } from './pages/DetailPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/playlist/:id' component={DetailPage} />
          <Route path='/'>
            <ActionSearchList />
            <MusicList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
