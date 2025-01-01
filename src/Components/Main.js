import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import '../Components/Main.css';

function Main() {
  return (
    <main className="main-content">
        <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
    </main>
  );
}

export default Main;