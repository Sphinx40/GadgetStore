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
                            <Link class="nav-link" to='/save'>Избранные</Link>
                        </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <h3 className='my-2 my-sm-0' style={{ marginRight: 20 }}>Total: {total} тг</h3>
                        <div className="column">

                            <div className="ui search">
                                <div className="ui icon input">
                                    <input
                                        type="text"
                                        placeholder="Search ..."
                                        value={searchWord}
                                        className="prompt"
                                        placeholder="Search"
                                        onChange={(e) => setSearchWord(e.target.value)}
                                    />
                                    <i aria-hidden="true" className="search circular inverted link icon" onClick={handleClick}></i>
                                </div>
                            <i aria-hidden="true" className="eraser circular inverted link icon" onClick={handleStore}></i>
                            </div>

                        </div>
                </div>
                </div>
            </nav>

        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps, actions)(Navbar);