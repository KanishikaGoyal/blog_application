import React from 'react';
import './bloglist.css';
import BlogItem from './blogitem/BlogItem';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog  ={blog} />
      ))}
    </div>
  );
};

export default BlogList;