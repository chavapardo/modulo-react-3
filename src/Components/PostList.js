import React from 'react';
import useFetch from '../hooks/useFetch';
import Post from './Post';

function PostList() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar las publicaciones</p>;

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;