import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';

const App = ({ Gadgets, minus, plus, buy }) => {

  const { gadget, total } = Gadgets;

  console.log(Gadgets.total)
  const P = (id) => {
    console.log(id)
    plus(id)
  }

  const M = (id) => {
    console.log(id)
    minus(id)
  }


  return (
    <div className='shop'>

      <div className='ui container'>
        <h1>Total: {total}</h1>
        <div className='row'>
          {gadget.map((g, id) => (
            <div className='col-sm-4' key={id}>
              <div class="ui card" id='card'>
                <div class="image">
                  <img src={g.img} />
                </div>
                <div class="content">
                  <div class="header">{g.title}</div>
                  <div class="description"><button class="ui mini button" onClick={() => M(id)}><i aria-hidden="true" class="minus icon"></i></button>
                    {g.num}  
                   <button class="ui mini button" onClick={() => P(id)}><i aria-hidden="true" class="plus icon"></i></button><br></br>
                   <button class="ui mini red button" id='buttonBuy' onClick={buy}>Buy</button></div>
                </div>
                <div class="extra content">
                  <a>
                    <i aria-hidden="true" class="user icon"></i>
                    {g.price}тг
       </a>
                </div>
              </div>
            </div>
          ))

          }</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Gadgets: state
  }
}


export default connect(mapStateToProps,actions)(App);
