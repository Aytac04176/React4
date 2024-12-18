import React, { Component, useEffect, useState } from 'react';
import './SearchBox.css';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../State/Slice/fetchSlice';

const SearchBox =() => {

    const dispatch = useDispatch()
   const [state,setState] =  useState({
        searchLine: ''
    }
)   

    const searchLineChangeHandler = (e) => {
        setState({ searchLine: e.target.value });
        e.target.value = ``
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
       dispatch(fetchData(state.searchLine))
       
    }


   const { searchLine } = state;
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                    Filmi axtarın:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="button"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={searchBoxSubmitHandler}
                    >
                       Axtar
                    </button>
                </form>
            </div>
        );
    
}
 
export default SearchBox;