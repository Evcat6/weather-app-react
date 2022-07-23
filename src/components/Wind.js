import React from 'react';
import PropTypes from 'prop-types';


const Wind = ({data}) => {
    return (
        <div className="wind">
            {data.wind ? <p className="bold"> {data.wind.speed} MPH</p> : null }
            <p>Wind Speed</p>
          </div>
    )
}

Wind.propTypes = {
    data: PropTypes.object.isRequired
}

export default Wind;