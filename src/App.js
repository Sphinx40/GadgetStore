import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';

const App = ({ Gadgets, buy }) => {

  const { gadget, total } = Gadgets;
  const [number, setNumber] = useState(1)
  const [copyId, setCopyId] = useState()

  const Plus = (id) => {
    if (copyId === id || copyId === undefined) {
      setNumber(number + 1)
      setCopyId(id)
    } else if (copyId !== id) {
      setNumber(1)
      setNumber(1 + 1)
      setCopyId(id)
    }
  }


  const Minus = (id) => {
    if (number > 1) {
      if (copyId === id || copyId === undefined) {
        setNumber(number - 1)
        setCopyId(id)
      } else if (copyId !== id) {
        setNumber(1)
        setNumber(1 - 1)
        setCopyId(id)
      }
    }
  }

  const buyGadget = (id) => {
    buy(id, number)
  }



  return (
    <div className='shop'>

      <div className='ui container'>
        <div className='headerStore'><h1>Store</h1></div>
        <div className='totalNumber'><h2>Total: {Gadgets.total}</h2></div>
        <div className='row'>
          {gadget.map((g, id) => (
            <div className='col-sm-4' key={id}>
              <div class="ui card" id='card'>
                <div class="image">
                  <img src={g.img} />
                </div>
                <div class="content">
                  <div class="header">{g.title}</div>
                  <div class="description"><button class="ui mini button" onClick={() => Minus(id)}><i aria-hidden="true" class="minus icon"></i></button>
                    &nbsp;{copyId === id ? number : 1}&nbsp;
                   <button class="ui mini button" onClick={() => Plus(id)}><i aria-hidden="true" class="plus icon"></i></button><br></br>
                    <button class="ui mini red button" id='buttonBuy' onClick={() => buyGadget(id)}>Buy</button></div>
                </div>
                <div class="extra content">
                  <a>

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


export default connect(mapStateToProps, actions)(App);
