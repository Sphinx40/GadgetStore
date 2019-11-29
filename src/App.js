import React from 'react';
import ListPage from './list-page'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
const App = () => {



  return (
    <Router>
      
    <Switch >
      <Route path="/"
             render={() => <ListPage />}
             exact />
    </Switch>
    
    </Router>
  );
}



export default App;
