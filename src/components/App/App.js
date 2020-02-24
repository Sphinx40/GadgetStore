import React from 'react';
import GadgetPage from '../GadgetPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from '../details/Details';
import Navbar from '../navbar/navbar';
import Favourite from '../favourites/favourite';
import PurchasedList from '../PurchasedList/List';
import './App.css';

const App = () => {


  return (
    <Router>
        <Navbar />
    <Switch >
      <Route path="/"
             render={() => {
               return(
                 <div>
                   <GadgetPage />
                 </div>
               )
      }}
             exact />

      <Route path='/page/:page/gadget/:id'
             render={({ match }) => {
             const { id, page } = match.params;
             return (
               <div>
              <Details id={id} page={page}/>
              </div>
              )
      }}/>

      <Route path='/PurchasedGadgets' component={PurchasedList} />

      <Route path='/save' component={Favourite} />
      <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    
     </Router>
  );
}



export default App;
