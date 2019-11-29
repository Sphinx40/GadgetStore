import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';

const ListPage = ({ Gadgets, buy }) => {

  const { gadget, total } = Gadgets;

  return (

    <div className='shop'>

      <div className='ui container'>
        <div className='headerStore'><h1>Store</h1></div>
        <div className='totalNumber'><h2>Total: {total}тг</h2></div>
        <div className='row'>
          {gadget.map((g, id) => (
            <div className='col-sm-4' key={id}>
              <div class="ui card" id='card'>
                <div class="image">
                  <img src={g.img} />
                </div>
                <div class="content">
                  <div class="header">{g.title}</div>
                  <div class="description">
                   
                  </div>
                </div>
                <div class="extra content">
                  <a>
                    {g.price} тг
                  </a>
                  <div className='viewButton'>
                    <button class="ui red inverted tiny fluid button">Buy</button>
                  </div>
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


export default connect(mapStateToProps, actions)(ListPage);
