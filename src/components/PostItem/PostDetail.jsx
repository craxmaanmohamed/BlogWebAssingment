import React, {  useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { contextBlog } from '../../context/contextBlog';

const PostDetail = () => {
    const { posts } = useContext(contextBlog);
  const {IdParms}=useParams()
  const singleDetailPost=posts.find((prev)=>prev.id==parseInt(IdParms))
  return (
    <div className="min-h-96 p-10">
       
        <h1 class="text-5xl font-semibold py-4 text-yellow-400"> Blog Details</h1>
      {singleDetailPost ? (
        <div>
          <h1 className="leading-tight text-white sm:text-4xl lg:text-1xl">
            {singleDetailPost.title}
          </h1>
          <div className="mt-4 text-base leading-relaxed text-white">
            {singleDetailPost.body}
          </div>
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default PostDetail;
