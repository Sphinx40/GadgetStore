import React, { useEffect, useState } from 'react';
import './favourite.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button, Header } from 'semantic-ui-react';
import { moneyFormat } from '../../utils/helpers';

const Favourite = ({ state, buy, Delete }) => {
    const { favourites, gadget, tableActive } = state;
    const [favouriteList, setFavouriteList] = useState([]);
    const [gadgetPrice, setGadgetPrice] = useState(0);

    useEffect(() => {
        setFavouriteList(favourites)
    },[favourites])

    const handleBuy = (id,count) => {
        buy(id,count)
    }
    
    const handleDelete = (id) => {
        const newArray = [
            ...favourites.slice(0, id),
            ...favourites.slice(id + 1)
        ];
        Delete(newArray)
    }
    const onPlus = (id) => {
        setFavouriteList(i => {
            let t = [ ...i ];
            t.map(item => {
                let p = item.price;
                if (item.id === id) {
                    item.count = item.count + 1;
                    item.price = item.price + p; 
                }
            })
            return t;
        })
    }

    const onMinus = (id) => {
        let gadget = favourites.find(({id}) => id === id)
        setFavouriteList(i => {
            let t = [ ...i ];
            t.map(item => {
                if (item.id === id) {
                    if (item.count>1) {
                        item.count = item.count - 1;
                        console.log(gadget.price,item.price)
                        item.price = item.price - gadgetPrice;
                    } else {
                        item.count = 1;
                    }
                }
            })
            return t;
        }) 
    }

    return (
        <div className='favouriteGadget'>
        <div className='ui container'>
            {tableActive ? 
            <table class="ui celled singleLine table">
                <thead class="">
                    <tr class="">
                        <th className="">Id</th>
                        <th class="">Gadget</th>
                        <th class="">Count</th>
                        <th class="">Price</th>
                        <th class="">Action</th>
                    </tr>
                </thead>
                <tbody class="">
                    {favouriteList.map((item,id) => (
                      <tr class="" key={id}>
                        <td class="">{id+1}</td>
                        <td class=""><img src={item.img} id='titleImg'/>{item.title}</td>
                        <td class=""><Button color='instagram' onClick={() => onPlus(item.id)}>+</Button> {item.count} <Button color='instagram' onClick={() => onMinus(item.id)}>-</Button></td>
                        <td class="">{moneyFormat(item.price)}</td>
                        <td class=""><button class="ui green tiny button" onClick={() => handleBuy(item.id,item.count)}>Buy</button><button class="ui red tiny inverted button" onClick={() => handleDelete(id)}>Delete</button></td>
                      </tr>  
                    ))}  
                  
                </tbody>
            </table> : <div><Header inverted as='h2'>Пока что, ничего нету !!!</Header></div>
}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, actions)(Favourite);