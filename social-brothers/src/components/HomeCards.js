import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./Blog";
import Error from "./Error";

function HomeCards() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const token = "pj11daaQRz7zUIH56B9Z";

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://178.62.198.162/api/posts`, {
          headers: {
            token: token,
          },
        });
        setIsLoading(false);
        setIsError(false);
        setBlogs(response.data);
      } catch (error) {
        console.log(error.response);
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchData();
  }, []);

  function onClick() {
    setPage(page + 1);
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://178.62.198.162/api/posts?page=${page}`,
          {
            headers: {
              token: token,
            },
          }
        );
        setIsLoading(false);
        setBlogs(response.data);
      } catch (error) {
        console.log(error.response);
        setIsLoading(false);
      }
    }
    fetchData();
  }

  return (
    <>
      <div className="card-wrapper">
        {isError && <Error />}
        {blogs.length === 0 && !isError && !isLoading && <p>Geen blogs meer</p>}
        {blogs.length !== 0 &&
          blogs.map((blog, index) => {
            return (
              <div className="card" key={blog.id}>
                <Blog key={index} blog={blog} />
              </div>
            );
          })}
      </div>
      <div className="right-button">
        <button onClick={onClick} type="submit">
          Meer laden
        </button>
      </div>
    </>
  );
}

export default HomeCards;
