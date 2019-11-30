const buy = (id,number) => ({ type: 'BUY', payload: {id,number} });
const scroll = (tf) => ({ type: 'SCROLL', payload: {tf} })
const favourites = (fav,num) => ({ type: 'FAVOURITES', payload: {fav,num} })
const Delete = (newArray) => ({ type: 'DELETE', payload: {newArray} })
const search = (word) => ({ type: 'SEARCH', payload: {word}})
const active = () => ({ type: 'ACTIVE' })

export {
    buy,
    scroll,
    favourites,
    Delete,
    search,
    active
}