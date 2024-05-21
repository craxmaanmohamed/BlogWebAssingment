import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/contextBlog';
import Header from './components/Header/Header';
import PostsList from './components/PostsList/PostsList';
import PostDetail from './components/PostItem/PostDetail';
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <BlogProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostsList/>}/>
          <Route path="/posts/:IdParms" element={<PostDetail />} />
      </Routes>
      </BrowserRouter>
     
      </BlogProvider>
      <Footer/>
    </>
  )
}

export default App
