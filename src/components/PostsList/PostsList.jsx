import React, { useContext } from 'react';
import { contextBlog } from '../../context/contextBlog';
import { Link } from 'react-router-dom';

const PostsList = () => {
    const { posts } = useContext(contextBlog);
    return (
        <div className="container mx-auto ">

            <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-4xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Stories from My Blog</h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">Read more to learn more.  Develop your mind by learning valuable content.    You can be a solver</p>
                    </div>

                    <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">

                        {posts.slice(0,50).map((Post) => (
                            <div class="flex flex-col overflow-hidden bg-gray-700 shadow-md rounded-xl">
                                <div class="flex flex-col justify-between flex-1 px-5 py-6">

                                    <div class="flex-1 mt-10">
                                        <p class="text-xl ">
                                        <Link to={`/posts/${Post.id}`} className="text-white">{Post.title}</Link>  {/* Use Link for navigation */}
                                        </p>
                                        <p class="mt-4 text-base text-gray-400">{Post.body.slice(0,100)}...</p>
                                    </div>
                                </div>
                                       
                  <Link to={`/posts/${Post.id}`} className="bg-green-600 w-full text-white p-4 font-semibold transition-all duration-200 hover:bg-green-400">
                    Read more
                  </Link>
                            </div>

                        ))}



                    </div>
                </div>
            </section>
        </div>
    );
};

export default PostsList;