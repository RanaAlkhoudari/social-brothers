import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Pagination({ setBlogs }) {
  const token = "pj11daaQRz7zUIH56B9Z";

  function handlePageClick({ selected: selectedPage }) {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://178.62.198.162/api/posts?page=${selectedPage + 1}`,
          {
            headers: {
              token: token,
            },
          }
        );
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }

  return (
    <ReactPaginate
      previousLabel={"← Vorig"}
      nextLabel={"Volgende pagina →"}
      onPageChange={handlePageClick}
      pageCount={124}
      containerClassName={"pagination"}
      previousLinkClassName={"pagination__link"}
      nextLinkClassName={"pagination__link"}
      activeClassName={"pagination__link--active"}
      disabledClassName={"pagination__link--disabled"}
    />
  );
}

export default Pagination;
