const buy = (id,number) => ({ type: 'BUY', payload: {id,number} });
const scroll = (tf) => ({ type: 'SCROLL', payload: {tf} })
const favourites = (fav) => ({ type: 'FAVOURITES', payload: {fav} })
const Delete = (newArray) => ({ type: 'DELETE', payload: {newArray} })
const search = (word) => ({ type: 'SEARCH', payload: {word}})
const active = () => ({ type: 'ACTIVE' })
const bought = (gadgets) => ({ type: 'BOUGHT_GADGETS', payload: gadgets })
const deleteGadget = (id) => ({ type: 'DELETE_PURCHASE', payload: id })

export {
    buy,
    scroll,
    favourites,
    Delete,
    search,
    active,
    bought,
    deleteGadget
}