import React, { useEffect, useState } from 'react';
import BlogInfo from './BlogInfo';

const Blog = ({handleToBookmark,handleToReding}) => {

    const [blog, setBlog] = useState([]);
    useEffect(() =>{
        fetch('FakeData.json')

        .then(res => res.json())
        .then(data =>setBlog(data))
    },[]);

    return (
        <div>
            {
            blog.map((blogInfo) => <BlogInfo blogInfo={blogInfo} key={blogInfo.id} handleToBookmark={handleToBookmark} handleToReding={handleToReding}></BlogInfo>)
            }
        </div>
    );
};

export default Blog;