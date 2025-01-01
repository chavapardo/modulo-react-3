import React from 'react'; 
import { Link } from 'react-router-dom';
 
function Post({ post }) {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/${post.id}`}>Leer más</Link>
        </div>
    );
}

export default Post;

