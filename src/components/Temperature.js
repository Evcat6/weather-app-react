import React from 'react';
import PropTypes from 'prop-types';

const Temperature = ({data}) => {
    return (
        <div className="temp">
          {data.main ? <h1>{data.main.temp} °F</h1> : null}
          </div>
    )
}

Temperature.propTypes = {
    data: PropTypes.object.isRequired
}

export default Temperature;