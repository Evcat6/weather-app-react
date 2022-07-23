import React from 'react';
import PropTypes from 'prop-types';


const SearchBar = ({location, setLocation, searchLocation}) => {
    return (
        <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        type="text"  
        onKeyPress={searchLocation}
        placeholder='Enter Location'/>
      </div>
    )
}

SearchBar.propTypes = {
    location: PropTypes.string.isRequired,
    setLocation: PropTypes.func.isRequired,
    searchLocation: PropTypes.func.isRequired
}


export default SearchBar;