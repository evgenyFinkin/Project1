//libs
import React from 'react';
import ReactDOM from 'react-dom';

//elements
import SearchBar from './components/bar/searchBar';
import MidScreen from './components/divs/midScreen';
import AvaterScreen from './components/avaters/avaterScreen';


const App=()=> {
    return (
        <div>
            <SearchBar/>
            <MidScreen/>
            <AvaterScreen/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));