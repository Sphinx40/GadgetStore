import React, { useState, useEffect } from 'react';
import './details.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Label, Header, Button } from 'semantic-ui-react';
import { moneyFormat } from '../../utils/helpers';

const Details = ({ id, state, buy, favourites, active, bought }) => {
    const [num, setNum] = useState(1)

    useEffect(() => {
    if (scroll) {
        window.scrollTo(0, 0)
    }
    },[])


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
        const g = {
            idx: gadget[id].idx,
            img: gadget[id].img,
            title: gadget[id].title,
            price: 0,
            count: num
        }

        for (var t = 0; t<num; t++) {
            g.price = g.price + gadget[id].price;
        }

        bought(g)
    }

    const izbrannoe = () => {
        active()
        setNum(1)
        favourites(id)
    }

    const { gadget, scroll } = state;
    
    return (
        <div className='details'>
            <div className='ui container'>
                <div className='row'>
                    <div className='col-md-4 card card-body' id='cardImg'>
                        <img className='gadgetImage' src={gadget[id].img}></img>
                    </div>
                    <div className='col-md-8'>
                        <Header as='h2' inverted>{gadget[id].title}
                        <Button color='red' floated='right' onClick={izbrannoe}>В избранное</Button>
                        </Header>
                        <Label.Group tag>
                        <Label as='a' color='red'>{moneyFormat(gadget[id].price)} тг</Label> 
                        </Label.Group>
                        <br />
                        <button class="ui secondary button" onClick={minus}>-</button>
                        {num}&nbsp;
                        <button class="ui secondary button" onClick={plus}>+</button>
                        <br/>
                        <br/>
                        <button class="ui red inverted button" onClick={handleBuy}>Buy</button>
                        <br/>
                        <br/>
                        <h3>Описание</h3>
                        <Header as='h3' id='gadgetTitle' inverted>{gadget[id].description}</Header>
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