import React from 'react';
import PropTypes from 'prop-types';
import Location from './location';
import Temperature from './Temperature';
import Description from './Description';
import BottomPart from './BottomPart';


const TopPart = ({data}) => {
    return (
        <div className='top'>
          <Location data={data}/>
          <Temperature data={data}/>
          <Description data={data}/>
          <BottomPart data={data}/>
          </div>
    )
}

TopPart.propTypes = {
    data: PropTypes.object.isRequired
}


export default TopPart;