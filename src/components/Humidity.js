import React from 'react';
import PropTypes from 'prop-types';


const Humidity = ({data}) => {
    return (
        <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}</p> : null}
            <p>Humidity</p>
          </div>
    )
}


Humidity.propTypes = {
    data: PropTypes.object.isRequired
}

export default Humidity;