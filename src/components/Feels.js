import React from 'react';
import PropTypes from 'prop-types';


const Feels = ({data}) => {
    return (
        <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}</p> : null}
            <p>Fels Like</p>
          </div>
    )
}

Feels.propTypes = {
    data: PropTypes.object.isRequired
}

export default Feels;