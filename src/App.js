import React from 'react';
import './App.css';
import { connect } from 'react-redux';


const App = ({ Gadgets, minus, plus }) => {

  const { gadget, total } = Gadgets;
  console.log(Gadgets.gadget[0].num)

  const P = (id) => {
    console.log(id)
    plus(id+1)
  }

  const M = (id) => {
    console.log(id)
    minus(id+1)
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
                   <button class="ui mini red button" id='buttonBuy' >Buy</button></div>
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

const mapDispatchToProps = (dispatch) => {
      return {
         plus: (id) => dispatch({ type: 'INC' , payload: id }),
         minus: (id) => dispatch({ type: 'DEC', payload: id })
      }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
