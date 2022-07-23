import React from 'react';
import PropTypes from 'prop-types';
import Feels from './Feels';
import Humidity from './Humidity';
import Wind from './Wind';

const BottomPart = ({data}) => {
    return (
        <div className='bottom' >
          <Feels data={data} />
          <Humidity data={data}/>
          <Wind data={data}/>
          </div>
    )
}

BottomPart.propTypes = {
    data: PropTypes.object.isRequired
}


export default BottomPart;