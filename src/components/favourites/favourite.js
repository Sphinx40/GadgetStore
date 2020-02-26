import React, { useEffect, useState } from 'react';
import './favourite.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button, Header, Divider } from 'semantic-ui-react';
import { moneyFormat } from '../../utils/helpers';

const Favourite = ({ state, buy, Delete, bought }) => {
    const { favourites, gadget, tableActive } = state;
    const [favouriteList, setFavouriteList] = useState([]);

    useEffect(() => {
        setFavouriteList(favourites)
    },[favourites])

    const handleBuy = (id,count,page,index) => {
        let gadgetIndexPrice = gadget[page].find(({idx}) => idx === index)
        buy(index,count,page)
        const g = {
            idx: gadget[page][id].idx,
            img: gadget[page][id].img,
            title: gadget[page][id].title,
            price: 0,
            count: favouriteList[id].count
        } 
         for (var p = 0; p < count; p++) {
            g.price = g.price + gadgetIndexPrice.price;
        }
        bought(g) 
    }
    
    const handleDelete = (id) => {
        const newArray = [
            ...favourites.slice(0, id),
            ...favourites.slice(id + 1)
        ];
        Delete(newArray)
    }
    const onPlus = (id,page) => {
        let g = gadget[page].find(({idx}) => idx === id)
        setFavouriteList(i => {
            let t = [ ...i ];
            t.map(item => {
                if (item.idx === id) {
                    item.count = item.count + 1;
                    item.price = item.price + g.price; 
                }
            })
            return t;
        })
    }

    const onMinus = (id,page) => {
        let g = gadget[page].find(({idx}) => idx === id)
        setFavouriteList(i => {
            let t = [ ...i ];
            t.map(item => {
                if (item.idx === id) {
                    if (item.count>1) {
                        item.count = item.count - 1;
                        item.price = item.price - g.price;
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
            <Header as='h2' textAlign='center' inverted>Избранные</Header>
            <Divider inverted />
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
                        <td class=""><Button color='instagram' onClick={() => onMinus(item.idx,item.page)}>-</Button>{item.count}&nbsp;<Button color='instagram' onClick={() => onPlus(item.idx,item.page)}>+</Button></td>
                        <td class="">{moneyFormat(item.price)}</td>
                        <td class=""><button class="ui green tiny button" onClick={() => handleBuy(id,item.count,item.page,item.idx)}>Buy</button><button class="ui red tiny inverted button" onClick={() => handleDelete(id)}>Delete</button></td>
                      </tr>  
                    ))}  
                  
                </tbody>
            </table> : <div><Header as='h2' inverted>Пока что, ничего нету !!!</Header></div>
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