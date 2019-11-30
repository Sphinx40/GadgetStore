import React from 'react';
import './favourite.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const Favourite = ({ state, buy, Delete }) => {
    const { favourites, gadget } = state;


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

    return (
        <div className='favouriteGadget'>
        <div className='ui container'>
            <table class="ui basic table">
                <thead class="">
                    <tr class="">
                        <th class="">Gadget</th>
                        <th class="">Count</th>
                        <th class="">Price</th>
                        <th class="">Action</th>
                    </tr>
                </thead>
                <tbody class="">
                    {favourites.map((item,id) => (
                      <tr class="" key={id}>
                        <td class="">{item.title}</td>
                        <td class="">{item.count}</td>
                        <td class="">{item.price}</td>
                        <td class=""><button class="ui green tiny button" onClick={() => handleBuy(item.id,item.count)}>Buy</button><button class="ui red tiny button" onClick={() => handleDelete(id)}>Delete</button></td>
                      </tr>  
                    ))}  
                  
                </tbody>
            </table>
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