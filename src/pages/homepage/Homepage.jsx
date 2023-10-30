import React, { useState } from 'react';
import './homepage.css'
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchbar/SearchBar';
import BlogList from "../../components/bloglist/BlogList";
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/emptylist/EmptyList';

const Homepage = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  
  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      { !blogs.length? <EmptyList/> :<BlogList blogs={blogs} /> }

      </div>
  );
};

export default Homepage;