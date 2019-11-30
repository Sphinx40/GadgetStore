import React from 'react';
import GadgetPage from '../GadgetPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from '../details/Details';
import Navbar from '../navbar/navbar';
import Favourite from '../favourites/favourite';
import './App.css';
const App = () => {


  return (
    <Router>
        <Navbar />
    <Switch >
      <Route path="/"
             render={() => <GadgetPage />}
             exact />

      <Route path='/gadget/:id'
             render={({ match }) => {
             const { id } = match.params;
             return <Details id={id}/>
             }}/>
      <Route path='/save' component={Favourite} />
      </Switch>
    
     </Router>
  );
}



export default App;
