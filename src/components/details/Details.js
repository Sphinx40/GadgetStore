import React, { useState } from 'react';
import './details.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const Details = ({ id, state, buy, favourites }) => {
    const [num, setNum] = useState(1)

    const minus = () => {
        if(num>1){
            setNum(num-1)
        }
    }

    const plus = () => {
        setNum(num+1)
    }

    const handleBuy = () => {
        buy(id,num)
        setNum(1)
    }

    const izbrannoe = () => {
        favourites(id,num)
    }

    const { gadget, scroll } = state;
    if (scroll) {
        window.scrollTo(0, 0)
    }
    return (
        <div className='details'>
            <div className='ui container'>
                <div className='row'>
                    <div className='col-md-4 card card-body'>
                        <img className='gadgetImage' src={gadget[id].img} />
                    </div>
                    <div className='col-md-8'>
                        <h2 className='mb-4' >{gadget[id].title}</h2>
                        <h4>{gadget[id].price} тг</h4>
                        <br />
                        <button class="ui secondary button" onClick={minus}>-</button>
                        {num}&nbsp;
                        <button class="ui secondary button" onClick={plus}>+</button>
                        <br/>
                        <br/>
                        <button class="ui red inverted button" onClick={handleBuy}>Buy</button>
                        <br/>
                        <br/>
                        <h4 id='gadgetTitle'>{gadget[id].description}</h4>
                        <button class="ui yellow button" onClick={izbrannoe}>В избранное</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, actions)(Details);