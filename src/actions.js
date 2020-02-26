const buy = (id,number,page) => ({ type: 'BUY', payload: {id,number,page} });
const favourites = (fav,page) => ({ type: 'FAVOURITES', payload: {fav,page} })
const Delete = (newArray) => ({ type: 'DELETE', payload: {newArray} })
const search = (word) => ({ type: 'SEARCH', payload: {word}})
const active = () => ({ type: 'ACTIVE' })
const bought = (gadgets) => ({ type: 'BOUGHT_GADGETS', payload: gadgets })
const deleteGadget = (id) => ({ type: 'DELETE_PURCHASE', payload: id })

export {
    buy,
    favourites,
    Delete,
    search,
    active,
    bought,
    deleteGadget
}