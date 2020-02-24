import React, { useEffect, useState } from 'react';
import './gadget-list.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Pagination, Segment } from 'semantic-ui-react'

const GadgetList = ({ state, onItemSelected, scroll }) => {
  const { gadget, search } = state;
  const [activePaginationPage, setActivePaginationPage] = useState(0);
  const [Gadget, setGadget] = useState([])

  useEffect(() => {
   scroll(false)
  },[])

  useEffect(() => {
    setGadget(gadget[activePaginationPage])
  }, [activePaginationPage])

  const handleClick = (id) => {
    onItemSelected(id,activePaginationPage)
    scroll(true)
  }

  const onPageChange = (e, { activePage } ) => {
    setActivePaginationPage(activePage-1)
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
            <div className='col-sm-3' key={id}>
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
                    <button class="ui red inverted tiny fluid button" onClick={() => handleClick(id)}>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          ))

          }</div>
      </div>
      <Segment textAlign='center' basic style={{ marginTop: 50 }}>
      <Pagination
    defaultActivePage={1}
    firstItem={null}
    lastItem={null}
    totalPages={2}
    onPageChange={onPageChange}
  /></Segment>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    state
  }
}


export default connect(mapStateToProps,actions)(GadgetList);
