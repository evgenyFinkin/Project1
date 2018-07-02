
import React from 'react';
import LogInButton from './loginButton';

const SearchBar=()=>{
    return (
        <div id="search-bar">
            <input id="search-bar-input" value="search"/>
            <LogInButton/>
        </div>
    );
};

export default SearchBar;