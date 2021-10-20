import React from "react";

function Blog({ blog }) {
  return (
    <>
      <img src={blog.img_url} alt={blog.title} />
      {blog.category !== null && (
        <span className="category">{blog.category.name}</span>
      )}
      <span className="created-at">{blog.created_at.slice(0, 10)}</span>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </>
  );
}

export default Blog;
