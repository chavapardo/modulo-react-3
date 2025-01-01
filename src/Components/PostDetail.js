import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function PostDetail() {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar la publicación</p>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;