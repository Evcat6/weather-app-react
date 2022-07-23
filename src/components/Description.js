import React from 'react';
import PropTypes from 'prop-types';


const Description = ({data}) => {
    return (
        <div className="description">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
    )
}

Description.propTypes = {
    data: PropTypes.object.isRequired
}

export default Description;