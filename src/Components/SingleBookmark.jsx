import React from 'react';

const SingleBookmark = ({singleBookmark}) => {
  
    const {title} = singleBookmark
    return (
        <div className='bg-white text-base font-medium m-5 p-5 rounded-lg'>
            {title}
        </div>
    );
};

export default SingleBookmark;