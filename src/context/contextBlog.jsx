import React, { createContext, useState, useEffect } from 'react';

const contextBlog = createContext();

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace with your API endpoint or local JSON file path
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <contextBlog.Provider value={{ posts }}>
      {children}
    </contextBlog.Provider>
  );
};

export { contextBlog, BlogProvider };