import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Blog from "./Blog";

function BlogCards() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = "pj11daaQRz7zUIH56B9Z";

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `http://178.62.198.162/api/posts?page=1`,
          {
            headers: {
              token: token,
            },
          }
        );
        setIsLoading(false);
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="blogs-wrapper">
        <div className="all-blogs">
          {blogs.length === 0 && !isLoading && <p>Geen blogs meer</p>}

          {isLoading && <p>Loading ...</p>}

          {blogs.map((blog, index) => {
            return (
              <div className="blog-card" key={blog.id}>
                <Blog key={index} blog={blog} />
              </div>
            );
          })}
        </div>
        <Pagination setBlogs={setBlogs} />
      </div>
    </>
  );
}

export default BlogCards;
