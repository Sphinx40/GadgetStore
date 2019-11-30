import React, { useState } from 'react';
import './navbar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
const Navbar = ({ total, search }) => {
    const [searchWord, setSearchWord] = useState('')

    const handleClick = () => {
        search(searchWord)
    }

    const handleStore = () => {
        search('')
        setSearchWord('')
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/" onClick={handleStore}><h2 id='storeLink'>Store</h2></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to='/save'>Favourites</Link>
                        </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <h3 className='my-2 my-sm-0' style={{marginRight: 20}}>Total: {total} тг</h3>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
                        <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleClick}>Search</button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps,actions)(Navbar);