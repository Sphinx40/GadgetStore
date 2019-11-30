import React, { useEffect, useState } from 'react';
import './gadget-list.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const GadgetList = ({ state, onItemSelected, scroll }) => {
  const { gadget, search } = state;
  const [Gadget, setGadget] = useState(gadget)


  useEffect(() => {
   scroll(false)

  },[])

  const handleClick = (id) => {
    console.log(id)
    onItemSelected(id)
    scroll(true)
  }


 
    let f = Gadget.filter(
        (Gadget) => {
            return Gadget.title.toLowerCase().toUpperCase().indexOf(
                search.toLowerCase().toUpperCase()
            ) !== -1;
        }
    );

  return (

    <div className='shop'>

      <div className='ui container'>
        
        <div className='row'>
          {f.map((g, id) => (
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
                    <button class="ui red inverted tiny fluid button" onClick={() => handleClick(g.idx)}>Buy</button>
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
    state
  }
}


export default connect(mapStateToProps,actions)(GadgetList);
