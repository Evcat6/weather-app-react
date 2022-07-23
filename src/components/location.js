import React from 'react';
import PropTypes from 'prop-types';

const location = ({data}) => {
    return (
        <div className="location">
        <p>{data.name}</p>
      {data.sys ? <p>{data.sys.country}</p> : null}
      </div> 
    )
}

location.propTypes = {
    data: PropTypes.object.isRequired
}

export default location;